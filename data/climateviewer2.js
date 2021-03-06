/*
    LEGENED http://climateviewer.net/
    var layerId = l.I,
    geoDataSrc = l.G,
    geoLayers = l.L,
    source = l.S,
    sourceUrl = l.U,
    zoom = l.Z,
    markerImg = l.MI,
    markerLabel = l.ML,
    markerColor = l.MC,
    markerScale = l.MS,
    markerMod = l.M,
    largeLayer = l.H,
    timeline = l.C,
    proxy = l.P;
*/
var layers = {
    I: 'Climate-Viewer',
    Live: { N: "Live",
        Report: {  N: "Climate Viewer Reports", icon: "bullhorn", '<': [
            { I: "cvr01", T: 'kml', M: true, MS: "2", G: "http://climateviewer.com/kml/cv-reports/cv-reports-0415.kml", S: "Climate Viewer Reports", U: "https://climateviewer.crowdmap.com/", N: "CV Reports - 2011 - 2015"}
        ]},
        Earthquake: { N: "Earthquake", icon: "rss", '<': [
            { I: "usgs-all-hour", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Hour)"},
            { I: "usgs-big-today", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Today)"},
            { I: "usgs-45-today", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Today)"},
            { I: "usgs-25-today", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Today)"},
            { I: "usgs-all-today", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Today)"},
            { I: "usgs-big-7day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Week)"},
            { I: "usgs-45-7day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Last Week)"},
            { I: "usgs-25-7day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Last Week)"},
            { I: "usgs-all-7day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Week)"},
            { I: "usgs-big-30day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Month)"},
            { I: "usgs-45-30day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Last Month)"},
            { I: "usgs-25-30day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Last Month)"},
            { I: "usgs-all-30day", T: 'geojson', ML: "usgs-eq", MI: "http://climateviewer.com/gallery/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Month)"},
            { I: "kml-emsc", T: 'kml', P: true, G: "http://www.emsc-csem.org/Earthquake/Map/earth/kml.php", S: "Centre Sismologique Euro-Méditerranéen (CSEM) Euro-Med earthquakes", U: "http://www.emsc-csem.org/", N: "Euro-Med Earthquakes - CSEM/EMSC"},
            { I: "kml-buoy", T: 'kml', G: "http://www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner", S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center", U: "http://www.ndbc.noaa.gov/", N: "NOAA Buoys"}
        ]},
        Volcano: { N: "Volcano", icon: "warning sign", '<': [
            { I: "kml-volcano", P: true, M: true, MS: "3", T: 'kml', G: "http://www.volcano.si.edu/news/WeeklyVolcanoGE-Reports.kmz", S: "Smithsonian Institute National Museum of History, Global Volcanism Program: Latest Volcanic Activity", U: "http://www.volcano.si.edu/", N: "Weekly Activity and Eruptions"},
            { I: "kml-volcanos", T: 'kml', G: "http://climateviewer.com/kml/3rdparty/alerts/GVPWorldVolcanoes-List.kmz", S: "Smithsonian Institute National Museum of History, Global Volcanism Program", U: "http://www.volcano.si.edu/", N: "Global Vocanoes"}
        ]},
        Fire: { N: "Fire", icon: "fire", '<': [
            { I: "kml-usda-fire", Z: true, T: 'kml', P: true, G: "http://activefiremaps.fs.fed.us/data/kml/conus.kmz", S: "US Department of Agriculture (USDA) Forest Service Remote Sensing Applications Center, Active Fire Mapping Program", U: "http://activefiremaps.fs.fed.us/", N: "Active Fire Mapping Program"},
            { I: "kml-noaa-fire", T: 'kml', P: true, G: "http://www.ospo.noaa.gov/data/land/fire/fire.kml", S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product", U: "http://www.ospo.noaa.gov/Products/land/hms.html", N: "NOAA HMS Fire"},
            { I: "kml-noaa-smoke", T: 'kml', P: true, G: "http://www.ospo.noaa.gov/data/land/fire/smoke.kml", S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product", U: "http://www.ospo.noaa.gov/Products/land/hms.html", N: "NOAA HMS Smoke"}
        ]},
        FEMA: { N: "FEMA", icon: "emergency", '<': [
            { I: "wms-femad", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/DECs/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Current Disaster Declarations"},
            { I: "wms-femah", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/HistoricalDesignations/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Historical Disaster Declarations"},
            { I: "wms-femar", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/RegHQs/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Regions and Field Offices"},
            { I: "wms-femae", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/EvacRoutes/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Hurricane Evacuation Routes"}
        ]},
        alerts: {  N: "Weather Alerts", icon: "cloud", '<': [
            { P: true, I: "kml-nwshlog", T: 'kml', M: true, MS: "3", MI: "http://climateviewer.com/gallery/lightning_bolt.png", G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsHourlyStormLogs.kml", S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)", U: "http://wdssii.nssl.noaa.gov/", N: "Hourly Storm Log"},
            { P: true, I: "kml-nwsdlog", T: 'kml', M: true, MS: "3", MI: "http://climateviewer.com/gallery/lightning_bolt.png", G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsDailyStormLogs.kml", S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)", U: "http://wdssii.nssl.noaa.gov/", N: "Daily Storm Log"},
            { P: true, I: "kml-hurrgdacs", T: 'kml', G: "http://www.gdacs.org/xml/gdacs.kml", S: " Global Disaster Alert and Coordination System (GDACS)", U: "http://www.gdacs.org/", N: "Hurricane Tracker (GDACS)"},
            { I: "nhc-hurricane", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", L: "NHC_TRACK_POLY,NHC_TRACK_LIN,NHC_TRACK_PT,NHC_TRACK_WWLIN,NHC_TRACK_PT_72DATE,NHC_TRACK_PT_120DATE,NHC_TRACK_PT_0NAMEDATE,NHC_TRACK_PT_MSLPLABELS,NHC_TRACK_PT_72WLBL,NHC_TRACK_PT_120WLBL,NHC_TRACK_PT_72CAT,NHC_TRACK_PT_120CAT", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - National Hurricane Center's Tropical Cyclone Track Forecast", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Hurricane and Tropical Cyclone Track Forecast"},
            { I: "nws-tstorm", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", L: "WARN_SHORT_SVR,WARN_SHORT_EWW,WARN_SHORT_TOR,WARN_SHORT_FLW,WARN_SHORT_FFW,WARN_SHORT_SMW", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - Short"}
        ]},
        clouds: { N: "Clouds", icon: "cloud", '<': [
            { I: "kml-clouds", T: 'kml', G: "http://mw1.google.com/mw-weather/clouds/root.kmz", S: "<p>U.S. Naval Research Laboratory (NRL) Marine Meteorology Division.</p><p>Since the 1960s, the capability to view Earth's cloud patterns from space has been made possible from two main types of environmental satellites, geostationary Earth-orbiting and low Earth-orbiting satellites. At least five geostationary satellites positioned around the equator are capable of providing depictions of global weather patterns, updated every hour. From their vantage point 36,000 km above the equator, the sensors onboard geostationary satellites can't quite 'see'the very high latitudes near the north and south poles. Since their orbit flies over the high latitude regions over the north and south poles typically every 90 minutes, low Earth-orbiting satellite imagery is well-suited to complement the geostationary imagery and thereby provide total global coverage. Even so, such satellite data merging is complicated by the fact that each individual satellite observation represents a single 'snapshot' of the cloud patterns, each taken at slightly different times, whereas the underlying clouds themselves are constantly moving and evolving.</p><p>In this depiction of global clouds, these satellite data are processed to discriminate clear (transparent) and cloudy areas. For cloudy areas, the brightness is approximated based upon the cloud top temperature relative to the surface temperature, as a proxy for the height of each cloud pixel. Due their location near the Earth's surface, low level clouds such as stratocumulus and stratus (fog) clouds may be poorly represented.</p>", U: "http://www.nrlmry.navy.mil/", N: "Global Clouds - NRL"},
            { P: true, I: "kml-usnmsir", T: 'kml', G: "/layers/kml/3rdparty/weather/clouds/USN-multisat-ir-CVDB.kmz", S: "Image S: US. Naval Research Laboratory, Marine Meteorology Division. Google Earth overlay by Jim Lee", U: "http://www.nrlmry.navy.mil/archdat/global/stitched/ir/", N: "Infrared Clouds - NRL"},
            { I: "wms-goes-vis", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_GOES", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD - Visible Satellite Cloud Imagery", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "GOES Visible Satellite Cloud Imagery"},
            { I: "wms-goes-ir", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_GOES_I4", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD - Infrared Satellite Cloud Imagery", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "GOES Infrared Satellite Cloud Imagery"}
        ]},
        radar: { N: "Radar", icon: "cloud", '<': [
            { I: "mesonet-nexrad", T: 'wms', G: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", L: "nexrad_base_reflect", S: "Iowa State University of Science and Technology MESONET", U: "http://mesonet.agron.iastate.edu/ogc/", N: "NEXRAD Base Reflectivity"},
            { I: "wms-nexrad", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_RIGE_NEXRAD", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - NEXRAD Doppler Radar Mosaic for CONUS (Continental USA), Puerto Rico, Hawaii, Alaska and Guam", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "NWS RIGE NEXRAD Radar"},

            { P: true, I: "kml-nowrad", T: 'kml', G: "http://mw1.google.com/mw-weather/radar/root.kmz", S: "Radar images on Google Earth are provIed by weather.com and Weather Services International (WSI) via a product known as NOWrad. NOWrad provIes a composite of 141 separate Doppler radars maintained by the U.S. National Weather Service and military. The NOWrad composite or mosaic is updated every 5-6 minutes and undergoes heavy quality-control by both specialized computer software algorithms and by human meteorologists. Most of the quality-control is performed to Ientify and eliminate what are called non-meteorological targets - a fancy way of referring to things that might show up on a weather radar that are not actually rain or snowfall (for instance: city buildings, mountain ranges, insects, airplanes, boats.)", U: "http://www.weather.com/", N: "WSI NOWrad"},
            { P: true, I: "kml-wxanalyst", T: 'kml', G: "http://wxanalyst.com/radar/WxAnalyst_NEXRAD.kmz", S: "WxAnalyst", U: "http://wxanalyst.com/radar/", N: "WxAnalyst NEXRAD"},
            { I: "f142", Z: true, T: 'kml', G: "/layers/kml/places/North-American-Doppler-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "North American Doppler Radar Stations"}
        ]},
        ra: { N: "Radar Animations", icon: "cloud", '<': [
            { P: true, I: "kml-nexradcgl", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/centgrtlakes_N0R_loop.kml", S: "Central Great Lakes - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "Central Great Lakes"},
            { P: true, I: "kml-nexradne", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/northeast_N0R_loop.kml", S: "North East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "North East"},
            { P: true, I: "kml-nexradnr", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/northrockies_N0R_loop.kml", S: "North Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "North Rockies"},
            { P: true, I: "kml-nexradpnw", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/pacnorthwest_N0R_loop.kml", S: "Pacific North West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "Pacific North West"},
            { P: true, I: "kml-nexradpsw", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/pacsouthwest_N0R_loop.kml", S: "Pacific South West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "Pacific South West"},
            { P: true, I: "kml-nexradse", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/southeast_N0R_loop.kml", S: "South East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "South East"},
            { P: true, I: "kml-nexradsmv", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/southmissvly_N0R_loop.kml", S: "South Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "South Mississippi Valley"},
            { P: true, I: "kml-nexradsp", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/southplains_N0R_loop.kml", S: "South Plains - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "South Plains"},
            { P: true, I: "kml-nexradsr", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/southrockies_N0R_loop.kml", S: "South Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "South Rockies"},
            { P: true, I: "kml-nexradumv", Z: true, T: 'kml', G: "http://radar.weather.gov/rIge/kml/animation/sectors/uppermissvly_N0R_loop.kml", S: "Upper Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/rIge/", N: "Upper Mississippi Valley"}
        ]},
        surface: { N: "Surface Observations", icon: "cloud", '<': [
            { I: "metar-temp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_TEMP", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Surface Air Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Surface Air Temperature"},
            { I: "metar-dp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_DP", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Dewpoint Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Dewpoint Temperature"},
            { I: "metar-wind", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_WIND", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Wind Velocity (Speed & Direction) point observations (Knots)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Wind Speed & Direction"},
            { I: "metar-pressure", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_PRES", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Mean Sea Level Pressure point observations (millibars)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Mean Sea Level Pressure"},
            { I: "metar-vis", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_VIS", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Visibility point observations (miles)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Visibility"},
            { I: "metar-sea-temp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MAR_SSTF", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Sea Surface Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Sea Surface Temperature"},
            { I: "metar-wave-height", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MAR_SWHFT", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Significant Wave Height point observations (feet)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Significant Wave Height"},
            { I: "metar-I", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_I", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Ientifier for Meteorological/Oceanographic Observing Station", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "METAR Station I"}
        ]},
        rain: { N: "Precipitation", icon: "umbrella", ">": [
            { P: true, I: "kml-usdrought", T: 'kml', G: "http://torka.unl.edu:8080/dm/data/kml/current/usdm_current.kmz", S: "University of Nebraska-Lincoln, US. Drought Monitor", U: "http://droughtmonitor.unl.edu/", N: "US. Drought Monitor"},
            { P: true, I: "kml-usshour", T: 'kml', G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF6hr_f00-f06_latest.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "http://www.wpc.ncep.noaa.gov/", N: "US. 6-hour Forecast"},
            { P: true, I: "kml-usstfhour", T: 'kml', G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF24hr_Day1_main.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "http://www.wpc.ncep.noaa.gov/", N: "US. 24-hour Forecast"},
            { P: true, I: "kml-ussfd", T: 'kml', G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF120hr_Day1-5_latest.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "http://www.wpc.ncep.noaa.gov/", N: "US. 5-day Forecast"},
            { P: true, I: "kml-ussfdflood", T: 'kml', G: "http://www.wpc.ncep.noaa.gov/kml/fop/fop.kml", S: "NOAA National Weather Service, Weather Prediction Center, 5-Day Significant River Flood Outlook", U: "http://www.wpc.ncep.noaa.gov/", N: "US. Significant Flood Risk"},
            { P: true, largeLayer: true, I: "kml-usfloods", T: 'kml', G: "http://water.weather.gov/ahps/worldfiles/ahps_national_fcst.kmz", S: "NOAA National Weather Service, River Observations", U: "http://water.weather.gov/ahps/", N: "US. River Flood Levels"},
            { P: true, I: "kml-trmmgf", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_hydro_model_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html", N: "Global Flood Forecast"},
            { P: true, I: "kml-trmmgff", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_G5_extended_hydro_model.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html", N: "5-day Flood Forecast"},
            { P: true, I: "kml-trmmthr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_3hr.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "3-hour Accumulated Rainfall"},
            { P: true, I: "kml-trmmtfhr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_24hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "24-hour Accumulated Rainfall"},
            { P: true, I: "kml-trmmsthr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_72hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "72-hour Accumulated Rainfall"},
            { P: true, I: "kml-trmmosehr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_168hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "168-hour Accumulated Rainfall"},
            { P: true, I: "kml-trmmav", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_average.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "30-day Average Rainfall"},
            { P: true, I: "kml-trmman", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_anomaly.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "30-day Anomaly Rainfall"},
            { P: true, I: "kml-eumetod", T: 'kml', G: "http://oiswww.eumetsat.int/IPPS/html/GE/MET0D_VP-MPE.kml", S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat 0 degree Multi-Sensor Precipitation Estimate (MPE) ", U: "http://www.eumetsat.int/website/home/Data/Products/index.html", N: "Meteosat METOD"},
            { P: true, I: "kml-euiodc", T: 'kml', G: "http://oiswww.eumetsat.int/IPPS/html/GE/IODC_VP-MPE.kml", S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat IODC Multi-Sensor Precipitation Estimate (MPE) ", U: "http://www.eumetsat.int/website/home/Data/Products/index.html", N: "Meteosat IODC"},
            { P: true, I: "kml-usdanrcs", T: 'kml', G: "http://www.wcc.nrcs.usda.gov/ftpref/data/water/wcs/earth/snotelwithoutlabels.kmz", S: "USDA Natural ReSs Conservation Service (NRCS)", U: "http://www.wcc.nrcs.usda.gov/", N: "SNOTEL Snowfall Monitors"},
            { P: true, I: "kml-nohrsc", T: 'kml', G: "http://www.nohrsc.noaa.gov/snow_model/GE/latest_nohrsc_nsm.kmz", S: "National Weather Service, National Operational Hydrologic Remote Sensing Center (NOHRSC)", U: "http://www.nohrsc.noaa.gov/", N: "NOHRSC Snowfall Monitors"}
        ]}
    },
    satellites: { N: "Satellites",
        sat: { N: "Satellite Imagery", icon: "globe", '<': [
            { I: "MODIS_Terra_CorrectedReflectance_TrueColor", T: 'nasa-gibs', S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "https://earthdata.nasa.gov/", N: "Corrected Reflectance (True Color)"},
            { I: "MODIS_Terra_CorrectedReflectance_Bands721", T: 'nasa-gibs', S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "https://earthdata.nasa.gov/", N: "Corrected Reflectance (Bands 7-2-1)"},
            { I: "MODIS_Terra_CorrectedReflectance_Bands367", T: 'nasa-gibs', S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "https://earthdata.nasa.gov/", N: "Corrected Reflectance (Bands 3-6-7)"},
            { I: "MODIS_Terra_SurfaceReflectance_Bands121", T: 'nasa-gibs', S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "https://earthdata.nasa.gov/", N: "Land Surface Reflectance (Bands 1-2-1)"}
        ]},
        satAnimation: { N: "Satellite Animations", icon: "globe", '<': [
            { P: true, C: true, I: "sat15", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.natl.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Atlantic - Total Precipitable Water"},
            { P: true, C: true, I: "sat16", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.epac.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North East Pacific - Total Precipitable Water"},
            { P: true, C: true, I: "sat17", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.wpac.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North West Pacific - Total Precipitable Water"},
            { P: true, C: true, I: "sat18", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.indo.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "Indian Ocean - Total Precipitable Water"},
            { P: true, C: true, I: "sat19", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.ausf.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "Western Australia - Total Precipitable Water"},
            { P: true, H: true, C: true, I: "sat09", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaiceir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "East North Atlantic Region - Infrared"},
            { P: true, H: true, C: true, I: "sat10", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicewv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Atlantic Region - Water Vapor"},
            { P: true, H: true, C: true, I: "sat11", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Pacific Region - Infrared"},
            { P: true, H: true, C: true, I: "sat12", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwwv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Pacific Region - Water Vapor"},
            { P: true, H: true, C: true, I: "sat13", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicsir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "South Pacific Region - Infrared"},
            { P: true, H: true, C: true, I: "sat14", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicswv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "South Pacific Region - Water Vapor"}
        ]}
    },
    pollution: { N: "Pollution",
        toxicrelease: { N: "Toxic Release", icon: "warning sign", '<': [
            { I: "epa-tri", H: true, T: 'geojson', MI: 'http://climateviewer.com/gallery/mryuk.png', G: "/layers/geojson/EPA-TRI-2011-cv3d.geojson", S: "2011 data, US Environmental Protection Agency (EPA) .KML file, converted to GeoJSON by Jim Lee", U: "http://www.epa.gov/enviro/facts/tri/index.html", N: "EPA Toxic Release Inventory (TRI) USA"}
        ]},
        toxicwaste: { N: "Toxic Waste Clean-up", icon: "recycle sign", '<': [
            { H: true, Z: true, I: "epa01", T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_01.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 1 - ME NH VT MA RI CT"},
            { H: true, I: "epa02", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_02.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 2 - NY NJ PR VI"},
            { H: true, I: "epa03", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_03.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 3 - PA DE DC MD VA WV"},
            { H: true, I: "epa04", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_04.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 4 - KY TN NC SC MS AL GA FL"},
            { H: true, I: "epa05", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_05.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 5 - MN WI IL MI IN OH"},
            { H: true, I: "epa06", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_06.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 6 - NM TX OK AR LA"},
            { H: true, I: "epa07", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_07.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 7 - NE KS IA MO"},
            { H: true, I: "epa08", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_08.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 8 - MT ND WY SD UT CO"},
            { H: true, I: "epa09", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_09.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 9 - CA NV AZ HI"},
            { H: true, I: "epa10", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/superfund/region_10.kmz", S: "EPA Superfund", U: "http://www.epa.gov/superfund/index.htm", N: "Region 10 - WA OR I AK"}
        ]},
        nukewaste: { N: "Nuclear Waste", icon: "recycle sign", '<': [
            { I: "kml-topten", T: 'kml', G: "/layers/kml/pollution/nuclear/Ten-Most-Radioactive-Locations-On-Earth-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Ten Most Radioactive Places on Earth"},
            { H: true, I: "nuke-test", T: 'kml', G: "/layers/kml/pollution/nuclear/nuclear-test-explosions-NL-Climate-Viewer-3D.kmz", S: "Jim Lee, based on the work of Wm. Robert Johnston and Lyle McElhaney", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Nuclear Test Explosions"},
            { I: "hibakusha", T: 'kml', G: "/layers/kml/3rdparty/pollution/nuclear/HibakushaWorldwIe.kmz", S: "Dr. Alex Rosen", U: "http://www.ippnw-students.org/Japan/hibakushamap.html", N: "50 Nuclear Nightmares!"},
            { C: true, I: "honeywell-uf6", Z: true, T: 'kml', G: "/layers/kml/pollution/nuclear/Honeywell-Uranium-HexafluorIe-Release-10-27-2014-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Honeywell Uranium HexafluorIe Processing Facility Radiation Release 10-27-2014"},
            { I: "kml-tmi", Z: true, T: 'kml', G: "/layers/kml/pollution/nuclear/Three-Mile-Island-meltdown-ClimateViewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1979 Three Mile Island Meltdown"},
            { I: "kml-chernobyl", Z: true, T: 'kml', G: "/layers/kml/pollution/nuclear/Chernobyl-meltdown-Climate-Viewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1986 Chernobyl Meltdown"},
            { I: "kml-fukushima", Z: true, T: 'kml', G: "/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-Climate-Viewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "2011 Fukushima-Daiichi Meltdown"},
            { P: true, I: "kml-fukutsu", Z: true, T: 'kml', G: "http://nctr.pmel.noaa.gov/honshu20110311/honshu_tsunami_2011-03-11.kmz", S: "NOAA Center for Tsunami Research, Maximum amplitude plot for Google Earth (KMZ)", U: "http://nctr.pmel.noaa.gov/honshu20110311/index.html", N: "Fukushima Tsunami Wave Height"}
        ]},
        fossilfuel: { N: "Fossil Fuel", icon: "recycle sign", '<': [
            { H: true, T: 'geojson', MS: 3, MI: 'http://climateviewer.com/gallery/oil_well.png', I: "p07", G: "/layers/geojson/Fracking-Chemical-Reports-cv3d.geojson", S: "Jim Lee", U: "http://blog.skytruth.org/2012/11/skytruth-releases-fracking-chemical.html", N: "Fracking America"},
            { C: true, I: "nrdc-drinking-water-impacts", T: 'kml', G: "/layers/kml/3rdparty/pollution/NRDC-drinking-water-impacts-2011-CV3D.kmz", S: "NRDC", U: "http://www.fractracker.org/downloads/nrdc-list-of-suspected-drinking-water-impacts-2011/", N: "NRDC Drinking Water Impacts 2011"},
            { I: "coal-power-now", T: 'geojson', MS: 3, MI: 'http://climateviewer.com/gallery/smoke-red.png', G: "/layers/geojson/Contaminated-Coal-Waste-NRDC-current-factories-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than four hundred forty existing coal-fired power plants in 47 states produced over 126 million tons of coal waste in 2005, contaminated by over 91 thousand tons of toxic metals. This table lists totals by state, ranked by total coal waste per state.", U: "http://www.nrdc.org/energy/coalwaste", N: "Contaminated Coal Waste (current)"},
            { I: "coal-power-future", T: 'geojson', MS: 3, MI: 'http://climateviewer.com/gallery/smoke-grey.png', G: "/layers/geojson/Contaminated-Coal-Waste-NRDC-future-factories-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than eighty new coal-fired power plants have been proposed around the country. If built, the plants will annually produce nearly 18 million tons of coal ash, contaminated by over 18 thousand tons of toxic metals. Over the course of their operating lives, these new power plants will produce approximately one billion tons of coal ash, with a million tons of toxic metals.", U: "http://www.nrdc.org/energy/coalwaste", N: "Contaminated Coal Waste (future)"},
            { I: "coal-ash", T: 'geojson', MS: 3, MI: 'http://climateviewer.com/gallery/mryuk.png', G: "/layers/geojson/Coal-Ash-Ponds-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “The horror is unimaginable.  A community suffering severe health effects, with more than a thousand resIents blaming coal ash contamination for causing their sickness, including grisly birth defects in their children.”", U: "http://switchboard.nrdc.org/blogs/rperks/coal_ash_wreaking_havoc_on_hea.html", N: "Coal Ash in Ponds"},
            { I: "p071", Z: true,T: 'kml', G: "/layers/kml/pollution/Shale-Gas-Basins-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Shale Gas Basins"},
            { H: true, I: "p08", Z: true, T: 'kml', G: "/layers/kml/pollution/cavern-field-Etzel-Germany-CV3D.kmz", S: "Jim Lee", U: "http://www.bi-lebensqualität.de/", N: "Cavern Field, Etzel, Germany"},
            { I: "p06", Z: true, T: 'kml', G: "/layers/kml/pollution/Drilling-Methane-Release-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Drilling Wells and Methane Release"},
            { P: true, I: "p09", T: 'kml', G: "http://earth.tryse.net/Oil_Spills_nw.kmz", S: "Jim Lee", U: "http://earth.tryse.net/", N: "Worst Oil Spills in History"}
        ]},
        geoengineering: { N: "Geoengineering", icon: "plane", '<': [
            { I: "p04", T: 'kml', G: "/layers/kml/pollution/ETC-Group-Geoengineering-CV3D.kmz", S: "ETC Group Excel to Google Fusion Table by Jim Lee", U: "https://www.google.com/fusiontables/data?docI=1NecyRN7xjFg6TA1YnRjPrEiYtoUKV2sWJ259GjY#rows:I=1", N: "Geoengineering Projects (ETC Group)"},
            { I: "p01", Z: true, T: 'kml', G: "/layers/kml/pollution/Weather-Modification-Association-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/geoengineering/", N: "Weather Modification Association Projects"},
            { I: "p02", Z: true, T: 'kml', G: "/layers/kml/pollution/NOAA-Reported-Weather-Modification-2012-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/geoengineering/", N: "NOAA 2012 Reported Activities (partial)"},
            { I: "p03", Z: true, T: 'kml', G: "/layers/kml/3rdparty/pollution/EOL-Field-Projects-CV3D.kmz", S: "National Center for Atmospheric Research (NCAR)/Earth Observing Laboratory (EOL)", U: "https://www.eol.ucar.edu/all-field-projects-and-deployments", N: "Earth Observing Lab Field Projects"}
        ]},
        climatechange: { N: "Climate Change", icon: "leaf", '<': [
            { P: true, I: "kml-mohc", T: 'kml', G: "http://services.google.com/earth/kmz/mohc_defra_layer.kmz", S: "Google", U: "http://earth.google.com/", N: "Climate Change In Our World"},
            { P: true, I: "kml-worldenergy", T: 'kml', G: "http://services.google.com/earth/kmz/energy_consumption.kmz", S: "Google", U: "http://earth.google.com/", N: "World Energy Consumption"},
            { P: true, I: "oil-consumption", T: 'kml', G: "http://services.google.com/earth/kmz/world_oil_consumption.kmz", S: "Google", U: "http://earth.google.com/", N: "Oil Consumption"},
            { P: true, I: "disappearing-forests", T: 'kml', G: "http://services.google.com/earth/kmz/disappearing_forests.kmz", S: "Google", U: "http://earth.google.com/", N: "Disappearing Forests"},
            { P: true, I: "greenland-melt", T: 'kml', G: "http://nsIc.org/data/virtual_globes/NSIC_Greenland_melt.kmz", S: "National Snow and Ice Data Center (NSDIC)", U: "http://nsIc.org/", N: "Greenland Glacial Melting"},
            { P: true, I: "polar-ice-extents", T: 'kml', G: "http://nsIc.org/data/virtual_globes/seaice/NSIC_SepSeaIceExtent.kmz", S: "National Snow and Ice Data Center (NSDIC)", U: "http://nsIc.org/", N: "Polar Ice Extents"}
        ]}
    },
    places: { N: "Places",
        nuclear: { N: "Nuclear", icon: "bomb", '<': [
            { I: "f01", T: 'kml', G: "/layers/kml/pollution/nuclear/Nuclear-Reactors-Worldwide-CV3D.kmz", S: "Jim Lee, based on the work of Declan Butler.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Operational Nuclear Reactors"},
            { I: "f02", T: 'kml', G: "/layers/kml/pollution/nuclear/Nuclear-Reactors-Non-Operational-Worldwide-CV3D.kmz", S: "Jim Lee, based on the work of Declan Butler.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Decommissioned Nuclear Reactors"},
            { I: "f03", T: 'kml', G: "/layers/kml/pollution/nuclear/Nuclear-Storage-Leaks-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Warheads, Waste, and Storage"},
            { H: true, I: "nuke-war", T: 'kml', G: "/layers/kml/pollution/nuclear/nuclear-test-explosions-NL-Climate-Viewer-3D.kmz", S: "Jim Lee, based on the work of Wm. Robert Johnston and Lyle McElhaney", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Nuclear Test Explosions"}
        ]},
        surveillance: { N: "Big Brother", icon: "bomb", '<': [
            { I: "f05", T: 'kml', G: "/layers/kml/places/NWO-Surveillance-Map-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "Government Spy Facilities"},
            { I: "f06", T: 'kml', G: "/layers/kml/3rdparty/places/Underwater-Cables-CV3D.kmz", S: "SubmarineCableMap.com", U: "http://www.submarinecablemap.com/", N: "Submarine Communication Cables"},
            { I: "f07", Z: true, T: 'kml', G: "/layers/kml/places/DHS-Fusion-Centers-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "DHS Fusion Centers"},
            { I: "f08", Z: true, T: 'kml', G: "/layers/kml/places/Drones-over-USA-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "UAV Drones over America"},
            { I: "drones-pakistan", Z: true, T: 'kml', G: "/layers/kml/places/Pakistan-drone-strikes-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d", N: "U.S. drone strikes in Pakistan"},
            { I: "prisons", T: 'kml', G: "/layers/kml/3rdparty/places/World-Prison-Brief-5659.kmz", S: "World Prison Brief (2010) by SergeyUA - World Prison Brief – 143 countries, 5660 places (September, 2010) Africa – 35 countries, 179 places. North America - 14 countries, 1767 places. South America – 13 countries, 191 places. Asia – 35 countries, 819 places. Australia &amp; Oceania – 7 countries, 119 places. Europe – 39 countries, 2585 places. Foto - 2513. References on website - 4586. Including WikipediA - 2223", U: "https://productforums.google.com/d/msg/gec-earth-browsing-moderated/Ey216sRE2Z0/xgt4bLhYriEJ", N: "Prisons WorldwIe"},
            { I: "us-border-crisis", Z: true, T: 'kml', G: "http://bit.ly/1t02UTr", S: "Relocations of Unaccompanied Immigrant Minors", U: "http://bit.ly/ZQFYvJ", N: "Relocations of Unaccompanied Immigrant Minors 2014"},
            { I: "fema-camp", Z: true, T: 'kml', G: "/layers/kml/places/FEMA-Camps-CV3D.kmz", S: "Created by Jim Lee. I have included the FEMA camp maps as a result of much public debate on the matter. If you inspect the markers that the two map creators made, it will be hard for you to find anything that resembles a holding cage. I will verify these locations over the coming months and see if any of this has truth to it. Until then, here are the two Ss of the &quot;FEMA Camp&quot; images that are making the rounds in social media, verify it before you believe it. The creators of these two maps dI a poor job in placing markers at the least, and dI not do the proper research to locate the facilities they claim are &quot;federal holding pens&quot;.", U: "http://climateviewer.com/rezn8d", N: "FEMA Camps"},
            { I: "mh17", Z: true, T: 'kml', G: "/layers/kml/places/MH17-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Malaysian Airlines MH17 shot down by SA-11"},
            { I: "surface-to-air", T: 'kml', G: "/layers/kml/3rdparty/places/SAM-Site-Overview-June-2013-CV3D.kmz", S: "WorldwIe SAM Site Overview, updated June 2013", U: "http://geimint.blogspot.com/2008/06/worldwIe-sam-site-overview.html", N: "Surface-to-Air Missiles (SAM) WorldwIe"},
            { I: "russian-sam", Z: true, T: 'kml', G: "/layers/kml/3rdparty/places/Fortress-Russia-CV3D.kmz", S: "Defending Mother Russia - Bluffer’s GuIe to Fortress Russia (Part 1): Integrated Air Defence of Russia 2010", U: "https://productforums.google.com/d/msg/gec-dynamic-data-layers/K7LgrqY1d_8/pmH2BocgvR4J", N: "Russian Air Defences"}
        ]},
        electromagnetic: { N: "Electromagnetic", icon: "signal", '<': [
            { I: "f12", T: 'kml', G: "/layers/kml/places/Star-Wars-SDI-OTH-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "Missile Defense Radars (Star Wars)"},
            { I: "f09", Z: true, T: 'kml', G: "/layers/kml/places/HAARP-HIPAS-Poker-Flat-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "HAARP, HIPAS, HLMS, and Poker Flat"},
            { I: "f10", T: 'kml', G: "/layers/kml/places/HAARP-Ionospheric-Heaters-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "Ionospheric Heaters, SuperDARN, EISCAT"},
            { I: "f11", T: 'kml', G: "/layers/kml/places/ULF-ELF-VLF-Transmitters-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "ELF and VLF Transmitters"},
            { I: "f13", T: 'kml', G: "/layers/kml/places/X-Files-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Lasers and Directed-Energy"},
            { I: "f14", Z: true, T: 'kml', G: "/layers/kml/places/North-American-Doppler-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "North American Doppler Radar Stations"},
            { I: "nws-npn", T: 'kml', G: "/layers/kml/3rdparty/places/NOAA-NPN-MADIS-CAP-CV3D.kmz", S: "National Weather Service NOAA Profiler Network (NPN) and MADIS CAP", U: "http://www.profiler.noaa.gov/npn/npnSiteLocationsAsText.jsp", N: "Wind Profiler Radars"},
            { I: "aeronet", T: 'kml', G: "/layers/kml/3rdparty/places/AERONET-CV3D.kmz", S: "NASA Goddard Space Flight Center", U: "http://aeronet.gsfc.nasa.gov/", N: "AERONET (AErosol RObotic NETwork)"},
            { I: "bsrn", T: 'kml', G: "/layers/kml/3rdparty/places/BSRN-CV3D.kmz", S: "World Radiation Monitoring Center (WRMC)", U: "http://www.bsrn.awi.de/en/home/", N: "Baseline Surface Radiation Network (BSRN)"},
            { I: "esrl", T: 'kml', G: "/layers/kml/3rdparty/places/ESRL-CV3D.kmz", S: "NOAA   Earth Systems Research Lab (ESRL)", U: "http://www.esrl.noaa.gov/", N: "Earth Systems Research Lab (ESRL) Instruments"},
            { I: "doris", T: 'kml', G: "/layers/kml/3rdparty/places/DORIS-CV3D.kmz", S: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)", U: "http://Is-doris.org/network/googleearth.html", N: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)"},
            { I: "f16", T: 'kml', G: "/layers/kml/places/RF-Facilities-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Observatories, Telescope Arrays, Satellite Communications"}
        ]},
        fcc: { N: "FCC Broadcast Towers", icon: "signal", '<': [
            { H: true, I: "f17", T: 'geojson', G: "/layers/geojson/FCC-cell-towers-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Cellular (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Cell Phone Towers"},
            { H: true, I: "f24", T: 'geojson', G: "/layers/geojson/FCC-paging-towers-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Paging (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Paging Towers"},
            { H: true, I: "f18", T: 'geojson', G: "/layers/geojson/FCC-AM-radio-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. AM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "AM Radio"},
            { H: true, I: "f19", T: 'geojson', G: "/layers/geojson/FCC-FM-radio-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. FM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "FM Radio"},
            { H: true, I: "f20", T: 'geojson', G: "/layers/geojson/FCC-Digital-TV-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - Digital (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Digital Television"},
            { H: true, I: "f21", T: 'geojson', G: "/layers/geojson/FCC-NTSC-TV-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - NTSC (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "NTSC Television"},
            { H: true, I: "f22", T: 'geojson', G: "/layers/geojson/FCC-LM-broadcast-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Land Mobile - Broadcast (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Land Mobile Broadcast"},
            { H: true, I: "f23", T: 'geojson', G: "/layers/geojson/FCC-BRS-EBS-2012-cv3d.geojson", ML: "fcc", MS: "3", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. BRS/EBS (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Educational Broadcast (BRS/EBS)"}
        ]}
    },
    other: { N: "Other",
        basemaps: { N: "Base Maps", icon: "globe", '<': [
            { I: "bl-std", T: 'base-layer', G: "//stamen-tiles.a.ssl.fastly.net/toner/", S: "A high contrast black and white map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Toner"},
            { I: "bl-stl", T: 'base-layer', G: "//stamen-tiles.a.ssl.fastly.net/toner-lite/", S: "A high contrast black and white map (light colored version). Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Toner (Light)"},
            { I: "bl-swc", T: 'base-layer', G: "//stamen-tiles.a.ssl.fastly.net/watercolor/", S: "Reminiscent of hand drawn maps, Stamen watercolor maps apply raster effect area washes and organic edges over a paper texture to add warm pop to any map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Watercolor"},
            { I: "bl-osm", T: 'base-layer', G: "//a.tile.openstreetmap.org/", S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.", U: "http://www.openstreetmap.org", N: "OpenStreetMap (OSM)"},
            { I: "bl-mq", T: 'base-layer', G: "//otile1-s.mqcdn.com/tiles/1.0.0/osm/", S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.", U: "http://www.openstreetmap.org", N: "MapQuest OpenStreetMap"}
        ]},
        flight: { N: "Flight", icon: "plane", '<': [
            { I: "us_runways", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "us_runways", S: "NOAA Ocean Service's nowCOAST's Map Services - Locations/Footprints of U.S. Airport Runways", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Airport Runways"},
            { I: "artcc", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "artcc", S: "NOAA Ocean Service's nowCOAST's Map Services - Air Route Traffic Control Centers - Areas of Responsibility", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Air Route Traffic Control Center Boundaries"}
        ]},
        boats: { N: "Marine Traffic", icon: "anchor", '<': [
            { P: true, I: "kml-noaabuoy", T: 'kml', G: "http://www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner", S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center", U: "http://www.ndbc.noaa.gov/", N: "NOAA Buoy Tracker"},
            { P: true, I: "kml-noaaship", T: 'kml', G: "http://egisws02.nos.noaa.gov/shiptracker/kml/All_Ships_CL.kmz", S: "National Oceanic and Atmospheric Administration (NOAA)", U: "http://egisws02.nos.noaa.gov/shiptracker/", N: "NOAA Ship Tracker"}
        ]},
        geographic: { N: "Geographic", icon: "info sign", '<': [
            { I: "pyramIs", T: 'kml', G: "/layers/kml/3rdparty/other/PyramIs-FR-CV3D.kmz", S: "based on the film &quot;Revelations of the PyramIs&quot;", U: "http://www.youtube.com/embed/GhC6lhAD4xY", N: "PyramIs of the World"},
            { I: "world_rivers", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_rivers", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Rivers"},
            { I: "world_lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Lakes"},
            { I: "great_lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "great_lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Great Lakes"},
            { I: "rivers", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "rivers", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Rivers"},
            { I: "lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Lakes"},
            { I: "watersheds", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "watersheds", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Watershed Boundaries"}
        ]},
        economic: { N: "Economic", icon: "money", '<': [
            { I: "native-american1", Z: true, T: 'kml', G: "/layers/kml/3rdparty/other/Indian-Lands.kmz", S: "This map layer shows Indian lands of the United States. Only areas of 640 acres or more are included. Federally-administered lands within a reservation are included for continuity; these may or may not be consIered part of the reservation and are simply described with their feature type and the administrating Federal agency. This is an updated version of the December 2005 map layer.", U: "http://nationalatlas.gov/atlasftp.html#indlanp", N: "Native American Lands 2005" },
            { I: "urban_areas_fill", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "urban_areas_fill", S: "NOAA Ocean Service's nowCOAST's Map Services - U.S. Urban Area Boundaries (color-filled polygons)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Urban Areas"},
            { I: "eez", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "eez", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Exclusive Economic Zone Boundaries"},
            { I: "world_countries", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_countries", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Country Boundaries"}
        ]}
    }
};

/** schema table reserved NObject field names */
var nfield = {
    'I': {
        N: 'id'
    },
    'N': {
        N: 'name'
    },
    '<': {
        N: 'contains' /* extensional inheritance, children */
    },
    '>': {
        N: 'container' /* extensional inheritance, parent */
    }
};

var NObject = Java.type('automenta.netention.NObject');

function nobject(x) {
    var y = new NObject(x.I, x.N);

    /** TTL rules
    <rezn8d> anything that is requested from the proxy should have a max TTL of 2 hours
    <rezn8d> correct
    <rezn8d> from the json list, everything else is denied
    <rezn8d> all WMS are proxied
    <rezn8d> and KML with proxy (P: true)
    */


    if (x.T === "wms") {
        x.P = true;
    }

    if (x.P) {
        x.PmaxAge = (2 * 60 * 60 * 1000); //2 hrs in milliseconds
    }

    for (var k in x) {
        y.put(k, x[k]);
    }



    return y;
}

nobjectTree(layers, function(v) {
    var x = nobject(v);
    print('vertex:', x);
    db.put(x);
}, function(s, p, o) {
    print('edge:', JSON.stringify(s), p, JSON.stringify(o) );
});

function nobjectize(x, parent) {
    if (!x.I) {
        if (x.N)
            x.I = x.N;
        else
            x.I = '_' + parseInt(Math.random() * 10000000.0);  //TODO uuid
    }

    if (parent && parent.I) {
        x['>'] = parent.I;
    }

    return x;
}

function nobjectTree(x, onVertex /* (contained, container) */, onEdge) {

    x = nobjectize(x);

    var kk = Object.keys(x);


    for (var i = 0; i < kk.length; i++) {

        var k = kk[i];

        if (!nfield[k]) {
            var w = x[k];

            if (!w || typeof(w)!=='object')
                continue;

            if (!w.I)
                w.I = k;

            w = nobjectize(w, x);

            nobjectTree(w, onVertex, onEdge);

            onVertex(w);

            //onEdge(x, '>', w);

            delete x[k];

        }
        else if (k === '<') {
            var arrayContents = x['<']
            for (var j = 0; j < arrayContents.length; j++) {

                var w = arrayContents[j];

                if (w) {

                    if (!w || typeof(w)!=='object')
                        continue;

                    var w = nobjectize(w, x);

                    nobjectTree(w, onVertex, onEdge);

                    onVertex(w);

                    //onEdge(x, '>', w);

                }
            }

            delete x['<'];

        }


    }


};

