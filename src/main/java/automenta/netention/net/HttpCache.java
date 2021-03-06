package automenta.netention.net;


import io.undertow.server.HttpServerExchange;
import io.undertow.util.HttpString;
import org.apache.commons.io.IOUtils;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.config.SocketConfig;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.*;
import java.nio.ByteBuffer;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.function.Consumer;

/** TODO avoid byte[] buffering data before writing to disk  */
public class HttpCache {

    public static final Logger logger = LoggerFactory.getLogger(HttpCache.class);

    final String cachePath;


    final ExecutorService executor = Executors.newCachedThreadPool();

    final int maxClientConnections = 64;
    final String userAgent = "Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0";

    private final HttpClientBuilder clientbuilder;

    public HttpCache(String cachePath) {
        this.cachePath = cachePath + "/";


        clientbuilder = HttpClientBuilder.create();
        clientbuilder.setMaxConnTotal(maxClientConnections);
        clientbuilder.setUserAgent(userAgent);
        clientbuilder.setDefaultSocketConfig(SocketConfig.custom().setRcvBufSize(128 * 1024).build());

    }

    public void get(String url, Consumer<CachedURL> target, long maxAge) {
        get(url, null, target, maxAge);
    }


    public class CacheRequest extends Request {

        private final Consumer<CachedURL> target;
        private final Consumer<CachedURL> filter;

        public CacheRequest(String url, Consumer<CachedURL> target, Consumer<CachedURL> filter) throws MalformedURLException, URISyntaxException {
            super(new URL(url));
            this.target = target;
            this.filter = filter;
        }


        @Override
        public CachedURL call() throws Exception {
            CachedURL response = super.call();
            if (response == null) {
                if (logger.isWarnEnabled())
                    logger.warn("undownloaded: " + url);
                target.accept(null);
            } else {

                if (filter != null)
                    filter.accept(response);

                if (logger.isDebugEnabled())
                    logger.debug("cache set: " + response.size + " bytes");

                target.accept(response);

                try {
                    put(decodeURIComponent(url.toString()), response);
                } catch (Exception e) {
                    logger.error(e.toString());
                }
            }

            return response;
        }

    }


    public void get(String url, Consumer<CachedURL> filter, Consumer<CachedURL> target, long maxAge) {
        if (logger.isDebugEnabled())
            logger.debug("http request: " + url);

        CachedURL response = null;

        url = decodeURIComponent(url);

        //attempt to read, or if expired, just get the newest
        try {
            response = get(url, maxAge);
        }
        catch (FileNotFoundException e) {
            //... normal, means cache miss
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        if (response == null) {

            if (logger.isDebugEnabled())
                logger.info("cache miss: " + url);

            try {

                executor.submit( new CacheRequest(url, target, filter) ).get();

            } catch (Exception e) {
                e.printStackTrace();
                target.accept(null);
            }


        } else {
            if (logger.isDebugEnabled())
                logger.debug("cache hit: " + url);
            target.accept(response);
        }



    }

    public static String decodeURIComponent(String s) {
        if (s == null) {
            return null;
        }

        String result = null;

        try {
            result = URLDecoder.decode(s, "UTF-8");
        }

        // This exception should never occur.
        catch (UnsupportedEncodingException e) {
            result = s;
        }

        return result;
    }



//    public void run() {
//        logger.info("Web server start:, saving to: " + cachePath);
//        web.build().start();
//    }

    public void put(String uri, CachedURL c) throws IOException {


        File f = getCacheFile(uri, true);
        File g = getCacheFile(uri, false);


        if (logger.isDebugEnabled())
            logger.debug("Caching " + uri + " to " + f.getAbsolutePath());

        synchronized(executor) {
            ObjectOutputStream ff = new ObjectOutputStream(new FileOutputStream(f));
            ff.writeObject(c);
            ff.close();

            FileOutputStream gg = new FileOutputStream(g);
            IOUtils.write(c.content, gg);
            gg.close();
        }

        //cache.put(pedido.URI, f.getAbsolutePath());

    }

    public File getCacheFile(String filename, boolean header) throws UnsupportedEncodingException {
        if (filename.startsWith("https://")) filename = filename.substring(8);
        if (filename.startsWith("http://")) filename = filename.substring(7);
        if (filename.startsWith("http:/")) filename = filename.substring(6);

        filename = URLEncoder.encode(filename, "UTF-8");

        filename = filename.replace("%2F", "/"); //restore '/' for directory seprataion.
        filename = filename.replace("%26", "/&"); //separate at '&' also
        filename = filename.replace("%3F", "/?"); //separate at '&' also
        filename = filename.replace("%3D", "="); //restore '=' this is valid in unix filename
        filename = filename.replace("%2C", ","); //restore ',' this is valid in unix filename
        filename = filename.replace("%3A", ":"); //restore ',' this is valid in unix filename


        final String target = cachePath + filename + (header ? ".h" : "");

        File f = new File(target);

        if (!f.exists()) {

            File parent = f.getParentFile();
            parent.mkdirs();
            f = new File(target);
        }

        return f;
    }

    public CachedURL get(String u, long maxAge) throws Exception {

        long now = System.currentTimeMillis();

        File header = getCacheFile(u, true);

        try {
            long lastModified = Files.getLastModifiedTime(Paths.get(header.toURI())).toMillis();

            if (maxAge > 0 && now - lastModified > maxAge) {
                return null;
            }

        }
        catch (Exception e) {
            //..
        }

        ObjectInputStream deficheiro = new ObjectInputStream(new FileInputStream(header));

        CachedURL x = (CachedURL) deficheiro.readObject();
        //x.content = new byte[x.size];

        File content = getCacheFile(u, false);
        final FileInputStream cc = new FileInputStream(content);
        x.contentStream = cc;
        return x;

    }


    public static class CachedURL implements Serializable {

        transient public byte[] content; //stored separately

        public int responseCode;
        public List<String[]> responseHeader;
        public int size;
        transient public FileInputStream contentStream;


        public CachedURL() {

        }

        public CachedURL(Header[] responseHeaders, int responseCode, byte[] content)  {

//            try {
//                this.content = IOUtils.toByteArray(contentStream);
//                this.responseCode = responseCode;
//                this.size = content.length;
//            } catch (IOException e) {
//                this.responseCode = 404;
//                this.size = 0;
//            }
            this.content = content;
            this.size = content.length;
            this.responseCode = responseCode;

            responseHeader = new ArrayList(responseHeaders.length);

            for (Header h : responseHeaders) {
                switch (h.getName()) {
                    case "ServerFred":
                        continue;
                    case "Cache-Control":
                        continue;
                    case "Keep-Alive":
                        continue;
                    case "X-Powered-By": continue;
                    case "Server": continue;

                    case "Set-Cookie": continue;
                    case "Access-Control-Allow-Origin": continue;
                    case "Connection": continue;
                }
                responseHeader.add(new String[]{h.getName(), h.getValue()});
            }

        }

        public byte[] bytes() {
            if (content!=null) return content;
            else
                try {
                    return IOUtils.toByteArray(contentStream);
                } catch (IOException e) {
                    return null;
                }
        }

        public void setContent(byte[] bytes) {
            this.content = bytes;
            this.size = bytes.length;
            this.contentStream = null;
        }

        public void send(HttpServerExchange exchange) {
            final CachedURL response = this;

//            if (response == null) {
//                exchange.setResponseCode(404);
//                exchange.getResponseSender().send("?");
//            } else {
                exchange.setResponseCode(response.responseCode);
                for (String[] x : response.responseHeader) {
                    exchange.getResponseHeaders().add(new HttpString(x[0]), x[1]);
                }

                if (response.content != null) {

                    exchange.startBlocking();

                    exchange.getResponseSender().send(ByteBuffer.wrap(response.content));

                    exchange.endExchange();


                } else {

                    exchange.startBlocking();

                    exchange.getResponseSender().transferFrom(response.contentStream.getChannel(), null);

                    exchange.endExchange();

//                    try {
//                        exchange.startBlocking();
//
//
//                        long send = IOUtils.copy(response.contentStream, exchange.getOutputStream());
//                        System.err.println("sent: " + send + " from " + response.contentStream);
//
//                        exchange.endExchange();
//
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                        Web.send(e.toString(), exchange);
//                    }
                }


            //}
        }
    }

//
//    public static void setHeader(HttpServerExchange exchange, FluentCaseInsensitiveStringsMap response) {
//        for (Map.Entry<String, List<String>> entry : response.entrySet()) {
//            if (!entry.getValue().isEmpty()) {
//                exchange.getResponseHeaders().put(new HttpString(entry.getKey()),
//                        entry.getValue().iterator().next());
//            }
//        }
//    }

    public class Request implements Callable<CachedURL> {
        public int responseCode;
        public URL url;
        public CachedURL curl;
        public HttpResponse response;

        public Request(URL url) throws URISyntaxException {
            this.url = url;
        }

        @Override
        public CachedURL call() throws Exception {

            //


            CloseableHttpClient httpclient = clientbuilder.build();


            byte[] data;
            try {
                HttpGet httpget = new HttpGet(url.toURI());

                if (logger.isInfoEnabled())
                    logger.info("HTTP " + httpget.getRequestLine());

                // Create a custom response handler
                ResponseHandler<byte[]> responseHandler = new ResponseHandler<byte[]>() {

                    @Override
                    public byte[] handleResponse(final HttpResponse hresponse) throws ClientProtocolException, IOException {
                        response = hresponse;
                        responseCode = hresponse.getStatusLine().getStatusCode();
                        if (responseCode >= 200 && responseCode < 300) {
                            HttpEntity entity = hresponse.getEntity();

                            return EntityUtils.toByteArray(entity);
                            //return entity.getContent();
                        } else {
                            return null;
                        }
                    }

                };

                data = httpclient.execute(httpget, responseHandler);

                if (data != null) {
                    this.curl = new CachedURL(response.getAllHeaders(), responseCode, data);
                }

            } finally {
                httpclient.close();
            }

            return curl;
        }
    }


}
