---
layout: default
title: Leaflet
folder: modulo6/leaflet
---

# Leaflet

<a href="http://leafletjs.com/" target="_blank">Leaflet</a> es una librería de código abierto para trabajar con mapas interactivos. Es fácil de programar, fácil de utilizar y con muy buen rendimiento. 

Durante la transición de OpenLayers 2 a 3, que ha supuesto aproximadamente 2 años de trabajo (de 2011 a 2014), y gracias a su simplicidad se ha convertido en la librería de _web mapping_ preferida de los desarrolladores y proyectos fuera del área de conocimiento de los _sistemas de información geográfica_.

### Características

El objetivo del proyecto es mantener una lista de <a href="http://leafletjs.com/features.html" target="_blank">funcionalidades</a> básicas para mantener la librería simple y de reducido tamaño.

La funcionalidad del núcleo de la librería se puede ampliar mediante <a href="http://leafletjs.com/plugins.html" target="_blank">_plugins_</a>.

### Documentación del API

Dispone de un <a href="http://leafletjs.com/reference.html" target="_blank">manual de referencia</a> bien escrito y actualizado.

Dispone de <a href="http://leafletjs.com/examples.html" target="_blank">tutoriales</a>, con pocos ejemplos y demasiado simples.

## El primer mapa

+ Cargar las librerías y su fichero de estilos en nuestra página web  
+ Definir, en el cuerpo de la página, un tag `div` que será el contenedor del mapa. Mediante estilos `CSS` se configura su tamaño  
+ Crear un **mapa** y añadirle una **capa**    

``` html
<!DOCTYPE html>
<html>
<head>
  <title>Hello Map</title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
  <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
  <style type="text/css">
    .mapas {
      width: 600px;
      height: 500px;
    }
  </style>
</head>
<body>
  <div id="miMapa" class="mapas"></div>

  <script>
    // Crea un mapa y inicializa su posición y escala
    var map = L.map('miMapa').setView([39.57, 3.0], 8);

    // Crea capa openstreetmap y la añade al mapa
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(map);
  </script>
</body>
</html>
```
<a href="{{ site.baseurl }}/src/modulo6/leaflet/hello-map.html" target="_blank">Abrir en el navegador...</a>

### CodePen

<a href="http://codepen.io" target="_blank">CodePen</a> es una herramienta de desarrollo web que permite a sus usuarios crear conjuntos de código `HTML`, `CSS` y `JavaScript` para demostraciones, educación, compartición de código...

El primer mapa con Leaflet en CodePen:

<p data-height="550" data-theme-id="0" data-slug-hash="KpppBY" data-default-tab="result" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/KpppBY/'>Hello Map</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

  > **Ejercicio:** Cambiar la localización del mapa a `[41.5025, 2.109]` y el nivel de zoom a `17`

&nbsp;

  > **Ejercicio:** Añadir una marca de la localización del _Curso JavaScript_, utilizamos el objeto <a href="http://leafletjs.com/reference.html#marker" target="_blank">Marker</a>:

  > ``` js
// Crea marcador
var ligit = L.marker([41.5026, 2.1089], {title: 'Curso JavaScript'})
  .addTo(map);    
```

&nbsp;

  > **Ejercicio:** Añadir un _popup_ a la marca, utilizamos el objeto <a href="http://leafletjs.com/reference.html#popup" target="_blank">Popup</a>:

  > ``` js
// Añade popup
ligit.bindPopup('<strong>Curso JavaScript</strong><p>MTIG-17<br>LIGIT - UAB</p>');   
```

### Sistema de referencia
Leaflet trabaja por defecto con el sistema de referencia _Spherical Mercator_ (código <a href="http://epsg.io/3857" target="_blank">EPSG:3857</a>), proyección utilizada por los mapas de Google, Bing, OpenStreeMap... y caracterizada por representar la Tierra mediante una esfera en lugar de un elipsoide; de esta manera se simplifican los cálculos pero a costa de errores de posicionamiento.

También define el sistema de referencia World Geodetic System (WGS) establecido en 1984 y revisado en 2004 (código <a href="http://epsg.io/4326" target="_blank">EPSG:4326</a>); según la gente de Leaflet _"A common CRS among GIS enthusiasts"_; para el resto, el sistema de referencia mundial de uso estándar en cartografía, geodesia y navegación (GPS).

Para utilizar otros sistemas de referencia se ha de utilizar el _plugin_ <a href="https://github.com/kartena/Proj4Leaflet" target="_blank">Proj4Leaflet</a>, como veremos más adelante.

## El Mapa
El objeto <a href="http://leafletjs.com/reference.html#map-class" target="_blank">Map</a> es la clase central de la librería.

Define propiedades y métodos para crear y manipular mapas:

+ Opciones (características configurables al crear el mapa):  
  + Estado del mapa: coordenadas y nivel de zoom inicial, capas, zoom máximo y mínimo...  
  + Interacciones: arrastrar el mapa, acciones _touch_, rueda del ratón...  
  + Configuración zoom y pan  
  + Navegación con el teclado  
  + Inercia al arrastrar  
  + Visibilidad de controles  
  + Animaciones de los cambios de vista  
  + Geolocalización  
+ Propiedades: algunas características se pueden modificaren tiempo de ejecución  
+ Métodos:  
  + Modificar el estado: mover vista, cambiar el zoom, geolocalizar usuario...  
  + Recuperar estado: coordenadas, zoom, bbox...  
  + Controles y capas: añadir, eliminar, popups...  
  + Conversiones: de pixels a coordenadas, reprojecciones
+ Eventos: ratón, carga de capas, cambio zoom o vista, geolocalización...

  > **Ejercicio:** Seguiendo con el ejemplo anterior, modificar el mapa para que se comporte como un mapa fijo (no interactivo) que simplemente muestra la ubicación del LIGIT (nivel de zoom a 11):

  > ``` js
// Como opciones del mapa
{
  dragging: false,
  touchZoom: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom:false,
  tap:false,
  keyboard: false,
  zoomControl: false
}   
```

## Los Controles

Los controles sirven para que el usuario interactúe con el mapa y las capas, y para mostrar información. Leaflet define sólo 4 controles.

El <a href="http://leafletjs.com/reference.html#control-zoom" target="_blank">Control.Zoom</a>, que ya conocemos.

Un control para mostrar la autoría de los datos y capas, <a href="http://leafletjs.com/reference.html#control-attribution" target="_blank">Control.Attribution</a>.

Un control de gestión de capas (<a href="http://leafletjs.com/reference.html#control-layers" target="_blank">Control.Layers</a>) que nos permite, de forma sencilla, configurar las capas base del mapa (mapa de fondo, sólo una capa visible en cada momento) y las de superposición (se visualizan sobre la capa base).

 Y un control que muestra la escala gráfica del mapa, <a href="http://leafletjs.com/reference.html#control-scale" target="_blank">Control.Scale</a>.

Veamos un ejemplo:

<p data-height="550" data-theme-id="0" data-slug-hash="Kpdxya" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/Kpdxya/'>Leaflet layer control</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Las Capas

Leaflet, como todas las librerías de _web mapping_, diferencia entre capas 2 tipos de capas, ráster y vectoriales. Las primeras visualizan imágenes, y las segundas trabajan con datos (puntos, líneas o polígonos) y los visualizan mediante estilos.

### Capas ráster

El núcleo de Leaflet define 3 tipos:

+ Capas de _tiles_: <a href="http://leafletjs.com/reference.html#tilelayer" target="_blank">TileLayer</a>  
+ Capas WMS: <a href="http://leafletjs.com/reference.html#tilelayer-wms" target="_blank">TileLayer.WMS</a>  
+ Capas de imágenes: <a href="http://leafletjs.com/reference.html#imageoverlay" target="_blank">ImageOverlay</a>  

Mediante _plugins_ se puede acceder a más tipos de capas: WMTS, ArcGIS Rest...

#### TileLayer
Todos los mapas que hemos generado hasta el momento han utilizado este tipo de capa. Cargan _tiles_ de los diferentes servicios de publicación (libres o de pago) disponibles, la mayoría renderizan el mapa a partir de la base de datos de OpenStreetMap o imágenes satélite.

 > **Nota:** Un buen sitio para empezar si teneis interés en crear vuestro propio servicio mapas a partir de la base de datos de OpenStreetMap es <a href="https://switch2osm.org" target="_blank">switch2osm</a>
 
 > Si lo que quereis es publicar vuestros propios datos, probablemente un buen punto de partida sea <a href="https://www.mapbox.com/tilemill" target="_blank">TileMill</a>

Para crear una capa del tipo TileLayer:

```js
L.tileLayer(urlTemplate, options?)
```
 
+ _urlTemplate_ sigue el esquema `http://{s}.tile.osm.org/{z}/{x}/{y}.png`, donde {s} es el subdominio (por defecto a, b, c), {z} el nivel de zoom y {x}, {y} las coordenadas del _tile_  
+ _options_, opcional define la configuración de la capa  

Existe un _plugin_ <a href="https://github.com/leaflet-extras/leaflet-providers" target="_blank">leaflet-providers</a> que proporciona configuraciones de muchos proveedores de _tiles_. Dispone de un <a href="http://leaflet-extras.github.io/leaflet-providers/preview/index.html" target="_blank">mapa</a> de muestra donde se pueden ver todas las capas disponibles con su denominación (si se utiliza el plugin) y su configuración (si no se utiliza). El ejemplo anterior utilizando este _plugin_ quedaría así:

<p data-height="550" data-theme-id="0" data-slug-hash="XbmvrM" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/XbmvrM/'>Leaflet leaflet-providers plugin</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Mediante el objeto <a href="http://leafletjs.com/reference.html#layergroup" target="_blank">LayerGroup</a> se pueden agrupar capas.

  > **Modificar** la línea 19 del ejemplo con el código siguiente:

  > ``` js
// Grupo de capas
var owm_pressure_cntr = L.layerGroup([
  L.tileLayer.provider('OpenWeatherMap.Pressure'),
  L.tileLayer.provider('OpenWeatherMap.PressureContour')
  ]);    
```

#### TileLayer.WMS
Extiende la capa `TileLayer` para recuperar los _tiles_ mediante un servicio WMS. Para crear una capa <a href="http://leafletjs.com/reference.html#tilelayer-wms" target="_blank">TileLayer.WMS</a>:

```js
L.tileLayer.wms(urlWMS, options)
```

+ _urlWMS_ url del servicio WMS, consultar directorios de servicios de las Infraestructuras de Datos Espaciales (IDE), como por ejemplo la <a href="http://www.idee.es/web/guest/directorio-de-servicios" target="_blank">IDEE</a>  
+ _options_, define la configuración WMS de la capa  

<p data-height="552" data-theme-id="0" data-slug-hash="JdYgwe" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/JdYgwe/'>Leaflet WMS</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Los servicios WMS pueden servir la información en los sistemas de referencia que consideren oportuno; pero deben servir las capas, como mínimo, en WGS84 coordenadas geográficas (epsg:4326). Veamos un ejemplo:

<p data-height="550" data-theme-id="0" data-slug-hash="rVxBwo" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/rVxBwo/'>Leaflet WMS epsg:4326</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

  > **Nota:** existe un _plugin_ con funcionalidad avanzada WMS, <a href="https://github.com/heigeo/leaflet.wms" target="_blank">leaflet.wms</a>

  > + single tile  
  > + GetFeatureInfo


#### ImageOverlay
Carga imágenes individuales en el mapa: planos georeferenciados, imágenes aéreas... Para crear una capa <a href="http://leafletjs.com/reference.html#imageoverlay" target="_blank">ImageOverlay</a>:

```js
L.tileLayer.wms(urlImagen, bbox, options)
```

+ _urlImagen_ url de la imagen  
+ _bbox_, coordenadas sur, oeste, norte y este de la imagen  
+ _options_, define la configuración de la capa  

<p data-height="578" data-theme-id="0" data-slug-hash="zGrGeg" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/zGrGeg/'>Leaflet ImageOverlay</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Capas vectoriales
Además de visualizar capas de información geográfica en formato imagen (ráster), podemos cargar capas de **datos** vectoriales (puntos, líneas y polígonos) y son las propias librerías, mediante la definición de estilos, las encargadas de dibujar los elementos.

Leaflet tiene una particular manera de definir las capas vectoriales. Cada tipo de geometría básico es un tipo de capa; capas de un único elemento:

+ <a href="http://leafletjs.com/reference.html#circlemarker" target="_blank">CircleMarker</a>: representar elementos puntuales mediante círculos. Para utilizar iconos debemos emplear marcas (<a href="http://leafletjs.com/reference.html#marker" target="_blank">Marker</a>) y si queremos cambiar su aspecto por defecto el objeto <a href="http://leafletjs.com/reference.html#icon" target="_blank">Icon</a>   
+ <a href="http://leafletjs.com/reference.html#polyline" target="_blank">Polyline</a> y <a href="http://leafletjs.com/reference.html#multipolyline" target="_blank">MultiPolyline</a>: representar líneas  
+ <a href="http://leafletjs.com/reference.html#polygon" target="_blank">Polygon</a> y <a href="http://leafletjs.com/reference.html#multipolygon" target="_blank">MultiPolygon</a>: representar polígonos  
+ <a href="http://leafletjs.com/reference.html#rectangle" target="_blank">Rectangle</a> y <a href="http://leafletjs.com/reference.html#circle" target="_blank">Circle</a> para dibujar rectángulos y círculos, respectivamente  

<p data-height="551" data-theme-id="0" data-slug-hash="xGZwer" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/xGZwer/'>Leaflet vector layers</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Para poder tener más de un elemento en la misma capa, y que compartan estilo y popups, Leaflet define <a href="http://leafletjs.com/reference.html#featuregroup" target="_blank">FeatureGroup</a> para poder agrupar geometrías.

  > **Ejercicio:** Eliminar (borrar) las 3 capas del ejemplo anterior y sustituirlas por una capa de grupo a la que añadiremos un popup.
 
  > ``` js
  // Crea grupo de elementos
  L.featureGroup([
    L.circleMarker([39.96136585349993,3.212277889251709],{
      radius: 7
    }),
    L.polyline([
      [39.71590222679897,3.478717803955078],
      [39.56464344273239,2.3466968536376953]
    ], {
      color: "#800",
      dashArray: "5,10",
      clickable: false
    }),
    L.polygon([
      [39.21602929971835,2.9724884033203125],
      [39.21576330385492,2.9975509643554683],
      [39.106886525487596,2.9975509643554683],
      [39.10741934019969,2.89764404296875],
      [39.15748593718304,2.896270751953125],
      [39.21602929971835,2.9724884033203125]
    ], {
      color: "#090",
      fillOpacity: 0.1
    }) 
  ]).bindPopup('Mensaje para todos los elementos!').addTo(map);
  ```

#### Capa GeoJson
<a href="http://geojson.org" target="_blank">GeoJson</a> es un formato abierto (bajo licencia <a href="http://creativecommons.org" target="_blank">Creative Commons</a>) para codificar elementos geográficos simples y sus propiedades mediante JSON (la notación de objetos JavaScript), por lo que se convierte en el formato ideal para trabajar en las aplicaciones de _web mapping_.

La gran diferencia con el resto de estándares GIS, como GML (Geography Markup Language), es que el estándard no lo mantiene un organismo de estandarización como OGC, si no por un grupo de desarrolladores expertos en _web mapping_ en el 2008 y su especificación se gestiona mediante una lista de correo.

Servidores geoespaciales como <a href="http://geoserver.org" target="_blank">GeoServer</a> pueden devolver datos en formato GeoJson en sus servicios WFS.

Leaflet define la capa <a href="http://leafletjs.com/reference.html#geojson" target="_blank">GeoJson</a> para trabajar con este tipo de datos.

 > **Nota:** uno de los objetivos de diseño de Leaflet es la simplicidad por un lado, y realizar de forma muy eficiente las tareas mínimas necesarias por otro. Por ello, el núcleo no implementa funciones para cargar datos (GeoJSON) de servidores; debemos utilizar herramientas externas a Leaflet para ello, por ejemplo JQuery

<p data-height="551" data-theme-id="0" data-slug-hash="gpPPoV" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/gpPPoV/'>Leaflet GeoJSON</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

  > **Nota:** en ocasiones necesitamos localizar un conjunto de elementos sobre un mapa. La opción más sencilla es crear un fichero GeoJSON con estos elementos. Si sabemos sus coordenadas es muy sencillo, únicamente necesitamos un editor de texto.
  
  > Si no sabemos las coordenadas podemos utilizar aplicaciones GIS de escritorio como <a href="http://www.qgis.org/" target="_blank">QGIS</a> o <a href="http://www.gvsig.org/" target="_blank">gvSIG</a>, ambas de código abierto, o cualquiera de las opciones comerciales. Todas ellas requieren conocimientos de base en sistemas de información geográfica.
  
  > Una alternativa sencilla sin requisitos previos es <a href="http://geojson.io" target="_blank">geojson.io</a>.

## _Plugins_
Toda la funcionalidad que no ofrece Leaflet por defecto la podemos encontrar en la gran cantidad de <a href="http://leafletjs.com/plugins.html" target="_blank">_plugins_</a> de terceros que se han escrito. Una prueba más de la aceptación que ha tenido la librería estos últimos años.

Para utilizar _plugins_ debemos descargarlos y guardarlos en un lugar accesible a nuestra aplicación web.

Veamos algunos ejemplos.

### MiniMap
Este es uno de esos _plugins_ que debería formar parte del núcleo de Leaflet. <a href="https://github.com/Norkart/Leaflet-MiniMap" target="_blank">MiniMap</a> define un mapa guía que muestra la posición de la vista del mapa principal.

<p data-height="552" data-theme-id="0" data-slug-hash="EjPmMq" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/EjPmMq/'>Leaflet MiniMap</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Awesome-Markers
El _plugin_ <a href="https://github.com/lvoogdt/Leaflet.awesome-markers" target="_blank">Awesome-Markers</a> define marcas de diferentes colores con iconos de ficheros de fuentes:

+ <a href="http://getbootstrap.com/components" target="_blank">Bootstrap Glyphicons</a> (por defecto)  
+ <a href="http://fortawesome.github.io/Font-Awesome/icons" target="_blank">Font Awesome</a>  
+ <a href="http://ionicons.com" target="_blank">Ionicons</a>  
+ Cualquier fichero de fuentes  

El ejemplo de senderismo con Awesome-Markers:

<p data-height="537" data-theme-id="0" data-slug-hash="ZGQyWd" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/ZGQyWd/'>Leaflet Awesome-Markers</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### MarkerCluster
Cuando necesitamos mostrar gran cantidad de puntos los navegadores empiezan a disminuir su rendimiento y se nota una falta de responsividad. Además, en niveles de zoom bajos (escalas pequeñas) la acumulación de puntos hace que estéticamente el mapa no resulte atractivo.

Podemos solucionar el problema mostrando los datos únicamente en escalas más grandes, donde se reducirá el número de puntos.

Pero en ocasiones nos interesará mostrar todos los puntos en todos los niveles de zoom, para ello tendremos que utilizar técnicas de agrupamiento (_clustering_). El _plugin_ <a href="https://github.com/Leaflet/Leaflet.markercluster" target="_blank">MarkerCluster</a> es el mejor en esta área.

<p data-height="553" data-theme-id="0" data-slug-hash="mJVwwp" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/mJVwwp/'>Leaflet MarkerCluster</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Heatmaps
Siguiendo con el problema anterior, gran cantidad de puntos, en ocasiones nos interesará mostrarlos como mapas de calor para resaltar las _zonas calientes_.

<a href="https://github.com/Leaflet/Leaflet.heat" target="_blank">Leaflet.heat</a> es un _plugin_ muy simple que nos permite generar _heatmaps_ con un rendimiento muy bueno.

<p data-height="550" data-theme-id="0" data-slug-hash="qdORJp" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/qdORJp/'>Leaflet heatmap</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### ESRI
La propia ESRI ha escrito un _plugin_ para acceder a sus servicios de ArcGIS (desde la versión 10), <a href="http://esri.github.io/esri-leaflet/" target="_blank">Esri Leaflet</a>.

 > **Nota:** actualmente está en fase de desarrollo (_release candidate_)

<p data-height="550" data-theme-id="0" data-slug-hash="RPrjag" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/RPrjag/'>Leaflet ESRI plugin</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### FileLayer
El _plugin_ <a href="https://github.com/makinacorpus/Leaflet.FileLayer" target="_blank">FileLayer</a> carga al mapa ficheros KML, GPX y GeoJSON desde el almacenamiento local.

<p data-height="551" data-theme-id="0" data-slug-hash="jPWaGJ" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/jPWaGJ/'>Leaflet FileLayer</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### GeoLocalización
Aunque Leaflet implementa la funcionalidad básica de geolocalización, el _plugin_ <a href="https://github.com/domoritz/leaflet-locatecontrol" target="_blank">Leaflet.Locate</a> define un control que simplifica las tareas de localización y seguimiento.

<p data-height="551" data-theme-id="0" data-slug-hash="QbyOmP" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/QbyOmP/'>Leaflet Localte</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Dibujar/editar elementos
<a href="https://github.com/Leaflet/Leaflet.draw" target="_blank">Leaflet.draw</a> es un control de edición de geometrías altamente configurable:

+ Tipos de geometría a editar  
+ Simbolización  
+ Configuración del toolbar  
+ Idioma de los textos  

 > **Nota:** este control **únicamente** edita las geometrías en el mapa, es responsabilidad del programador guardar los cambios en local (IndexedDB, WebStorage) o remoto (enviándolos a un servidor)

<p data-height="551" data-theme-id="0" data-slug-hash="NqxwLJ" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/NqxwLJ/'>Leaflet Draw</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Estilos elementos
Otro _plugin_, <a href="https://github.com/dwilhelm89/Leaflet.StyleEditor" target="_blank">Leaflet.StyleEditor</a>, presenta una interfaz de usuario sencilla para editar algunas de las opciones de simbolización de los distintos tipos de geometrías.

<p data-height="550" data-theme-id="0" data-slug-hash="zGrpxZ" data-default-tab="js" data-user="xguaita" class='codepen'>See the Pen <a href='http://codepen.io/xguaita/pen/zGrpxZ/'>Leaflet Draw & StyleEditor</a> by Xisco Guaita (<a href='http://codepen.io/xguaita'>@xguaita</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>