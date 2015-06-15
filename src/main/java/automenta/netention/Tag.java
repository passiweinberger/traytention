/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package automenta.netention;

/**
 * Generalization of a URL/URI, label, semantic predicate, type / class, or any kind of literalizable concept.
 */
public class Tag {

    
    public final String id;

    public String name;
    public String description;

    //public Map<String,Object> meta = new HashMap();


    private String icon;

    //TEMPORARY
    public final static String Human = "Human";
    public final static String User = "User";

    public final static String Learn = "Learn";
    public final static String Do = "Do";
    public final static String Teach = "Teach";

    public final static String Can = "Can";
    public final static String Need = "Need";
    public final static String Not = "Not";

    public final static String Web = "Web";
    public final static String tag = "tag";
    public final static String property = "property";



    protected Tag(String id) {

        this.id = id;

        //TODO replace with getOrAdd method


    }
    
//    public Tag meta(String key, Object value) {
//        vertex.setProperty(key, value);
//        return this;
//    }


    public void setDescription(String d) {
        this.description = d;
    }

    public void icon(String icon) {
        this.icon = icon;
    }


    public void name(String name) {
        this.name = name;
    }

//    public void addEdge(String label, String target) {
//        edges.put(label)
//    }

//    public Edge inheritance(String object, double v) {
//        if (v > 0) {
//            MapGraph.MVertex vv = vertex.graph().getVertex(object);
//            if (vv == null) {
//                vv = vertex.graph().addVertex(object);
//            }
//            Edge e = vertex.addEdge(NALOperator.INHERITANCE.str, vv);
//            e.setProperty("%", v);
//            return e;
//        }
//        else {
//            //TODO
//        }
//        return null;
//    }
}
