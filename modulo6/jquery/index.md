---
layout: default
title: JQuery
desc: JQuery. Programación con Javascript - Máster en tecnologías de la información geográfica (MTIG 17). UAB
folder: modulo6/jquery
---

# JQuery
<a href="http://jquery.com/" target="_blank">JQuery</a> es una librería de abstracción del DOM con las siguientes funcionalidades y características:

- Selección, modificación, creación y eliminación de elementos del DOM  
- Gestión de eventos  
- Efectos y animaciones  
- AJAX  
- Multi-navegador  
- Es muy ligera: aproximadamente 32kb comprimida
- Es de código abierto

## Por qué JQuery?
La primera razón de utilizar JQuery, o librerías similares como <a href="http://prototypejs.org/" target="_blank">prototype</a> o <a href="http://yuilibrary.com/" target="_blank">YUI</a>, es simple: **compatibilidad**. Los diferentes navegadores implementan de forma diferente el DOM a causa de la poca claridad con que están definidas algunas características del modelo en las <a href="http://www.w3.org/DOM/" target="_blank">especificaciones</a> del W3C. También hay diferencias en la cantidad de funcionalidades <a href="http://quirksmode.org/dom/core/" target="_blank">implementadas</a>. La librería se encarga de ocultar esas diferencias y evita la programación específica para cada familia de navegadores.

La segunda es que su sintaxis está diseñada para facilitar (y simplificar) la navegación por el documento, la selección de objetos del DOM, el manejo de eventos, la creación de animaciones y el desarrollo de aplicaciones Ajax.

## Cómo usar JQuery?
Primero hemos de cargar las librerías en su versión comprimida (producción) o descomprimida (desarrollo), y lo podemos hacer de dos formas:

- <a href="http://jquery.com/download/" target="_blank">Descargándolas</a> de jquery.com y utilizando copias locales

```html
<script src="jquery-2.1.1.js"></script>
```

- Utilizando un servicio <a href="http://jquery.com/download/#using-jquery-with-a-cdn" target="_blank">CDN</a> (Content Delivery Network)

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```

Para poder acceder al DOM y manipular sus elementos hemos de asegurarnos que éstos se han cargado en su totalidad, para ello JQuery tiene el evento de documento _ready_:

```javascript
$(document).ready(function() {
  // Código a ejecutar
});
```
Podemos también verlo escrito de la siguiente forma:

```javascript
$(function() {
  // Código a ejecutar
});
```
Cuando el documento esté listo ejecuta el código. A diferencia del evento _onload_ del DOM, el evento _ready_ de JQuery no espera a que se carguen todas las imágenes  e _iframes_ de la página por lo que es mucho más rápido.

La sintaxis básica de JQuery es ```$(selector).accion()```, seleccionar elementos para hacer algo con ellos, donde:

- **$** es el acceso al objeto JQuery
- **selector** condición de búsqueda
- **accion** a realizar sobre los elementos seleccionados

## Seleccionar elementos
Para poder manipular los elementos de una página web primero debemos <a href="http://api.jquery.com/category/selectors/" target="_blank">seleccionarlos</a>. JQuery utiliza <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors" target="_blank">selectores CSS</a> para recuperar elementos del DOM.

Vamos a cargar el fichero html <a href="{{ site.baseurl }}/src/modulo6/jquery/ejercicios-jquery.html" target="_blank">ejercicios-jquery.html</a> en el navegador y abrimos la consola javascript.

### Por ID
El atributo _id_ de un elemento del DOM debe ser único en la página.

``` js
$('#funcId')
```
### Por nombre de clase
``` js
$('.destacar')
```
### Por tag HTML
``` js
$('p')
$('li')
```
### Por parentesco/orden
``` js
$('ul:first')
$('ul:first li')
$('ul:first > li')
```
###  Por contenido
``` js
$('p:contains("DOM")')
```
### Por atributos
``` js
$('*[id]')
$('a[target="_blank"]')
$('a[href*=".com"]')
```
### Por visibilidad
Desde la pestaña `Elements` seleccionar el tag `li` con `id="funcId"` y ocultarlo mediante el siguiente atributo de estilo `display: none;`.

``` js
$('li:hidden')
```

## Navegar por el árbol
Después de la primera selección podemos refinar el resultado o navegar por el árbol de DOM para acceder a elementos relacionados; en terminología JQuery <a href="http://api.jquery.com/category/traversing/" target="_blank">_traversing_</a>.
### Filtros
``` js
$('li').first()
$('li').last()
$('li').has('ul')
$('p').has('a')
$('p').eq(1)
```
### Relaciones
``` js
$('#caracId').children()
$('#caracId').find('li')
$('#caracId').find('li').eq(1)
$('li:contains("32kb")').parent()
$('li:contains("32kb")').closest('li')
$('#funcId').find('li').eq(1).prev()
$('#funcId').find('li').eq(1).nextAll()
```

## Modificar elementos
Ahora que sabemos seleccionar los elementos que necesitamos vamos a <a href="http://api.jquery.com/category/manipulation/" target="_blank">modificar</a> la página cambiando las propiedades de los elementos o añadiendo/eliminando componentes del DOM.
### Clases
``` js
$('a').hasClass('enlace')
$('a').addClass('enlace')
$('a').hasClass('enlace')
$('a').toggleClass('enlace')
```
### Propiedades css
``` js
$('#logo').width()
$('#logo').width(400)
$('p').eq(0).css('color', 'red')
$('p').eq(0).css({fontFamily: 'arial', fontSize: '18px'})
```
### Añadir, eliminar, reemplazar elementos
``` js
$('#caracId > ul').append('<li>Sencillo de aprender</li>')
$('span:contains(compa)').html('COMPATIBILIDAD')
$('h2').after('<p>Hay dos razones principales para utilizar JQuery:</p>')
```

## Eventos
JQuery facilita la gestión de <a href="http://api.jquery.com/category/events/" target="_blank">eventos</a> del navegador y de usuario.

``` js
$('img').click(function(){alert($(this).attr('src'))})
$('img').off('click')
$('li[id]').hover(function(){$(this).toggleClass('destacar')})
```
## Animaciones
Proporciona una serie de funciones para añadir <a href="http://api.jquery.com/category/effects/" target="_blank">animaciones</a> a las páginas web.

``` js
$('#logo').fadeOut()
$('#logo').fadeIn()
$('#logo').slideUp('slow')
$('#logo').slideDown()
$('#logo').slideDown('fast')
$('#logo').toggle() x 2
$('#logo').animate({width:'50%', marginLeft:'25%'}, 2000)
```
## Ajax
Para finalizar, JQuery dispone de un conjunto de funciones para realizar peticiones asíncronas a los servidores y modificar el contenido de la página sin necesidad de refrescarla (técnicas Ajax).

La función principal es `$.ajax()`, que se encarga de realizar todas las peticiones Ajax de JQuery. Generalmente no se utiliza directamente ya que se definen funciones para peticiones específicas que simplifican muchísimo su uso:

+ `$.get()`: petición get HTTP
+ `$.post()`: petición post HTTP
+ `$.getJSON()`: petición get de datos en formato JSON
+ `$.getScript()`: carga un script JavaScript y lo ejecuta
+ `$.load()`: carga html en un elemento

### Ejemplo Ajax
Recuperamos el ejemplo del tema anterior. Utilizando JQuery el script con las funciones `getWeather` y `evalResp` quedaría de la siguiente manera:

``` js
function getWeather() {
  var query= $('#ciudad').val();

  if (query === '') {
    alert('Texto en blanco');
    return;
  }

  $.getJSON('http://api.openweathermap.org/data/2.5/find?type=like&lang=es&units=metric&q=' + query)
  .done(function(data) {
    var $div_resp= $('#div_resp');

    if (data.cod !== '200' || data.count === 0) {
      $div_resp.html('Ningún resultado');
    } else {
      $div_resp.empty();
      for (var i= 0; i < data.list.length; i++) $div_resp.append('<b>'+data.list[i].name+' ('+data.list[i].sys.country+'):</b> '+data.list[i].main.temp+' ºC<br>');
    }
  })
  .fail(function(jqxhr, textStatus, error) {
    console.log('Error: ' + textStatus + ', ' + error );
  });
}
```
<a href="{{ site.baseurl }}/src/modulo6/jquery/ajax.html" target="_blank">Abrir ejemplo en el navegador...</a>

## Proyecto Memory
Juego de cartas boca abajo donde hay que recordar la posición e ir haciendo parejas. En esta versión en lugar de imágenes se utilizan las tablas de multiplicar y se tienen como máximo 40 intentos para hacer las 10 parejas. Cada vez que se empieza un juego se selecciona aleatóriamente el valor del multiplicando entre 2 y 9.

![](./images/memory.png)

  <a href="{{ site.baseurl }}/src/modulo6/jquery/memory/index.html" target="_blank">Jugar...</a>

### Paso a paso
La resolución del juego básicamente consiste en:

+ Crear estructura del _tablero_  
+ Empezar un juego  
  + Inicializar variables de estado  
  + Crear cartas  
    + Elegir un número aleatorio para el multiplicando  
    + Crear 20 cartas y mezclarlas  
    + Añadirles un evento click  
+ Jugar: hacer click a las cartas  
  + Primera o segunda carta?  
  + Guardar primera carta y quitar evento click  
  + Si es la segunda, comparar  
    + Si iguales: nueva pareja. Si diferentes, volver a activar evento click  
    + Comprobar nº de clicks y nº de parejas. Continuar o acabar

#### La estructura (html)

``` html
<body>
  <div id="tablero">
    <div id="titulo">Busca las parejas! Tienes hasta 40 clicks</div>
    <div id="cartas"></div>
    <div id="panel">
      <span id="texto_panel">0 clicks</span>
      <br><br>
      <span class="boton"><a onclick="EmpezarJuego();">Repartir cartas</a></span>
    </div>
  </div>
</body>
```

#### El diseño (css)

``` css
* {
  margin: 0;
  padding: 0;
}
body {
  font: 28px Verdana;
  color: #fff;
  background: #ddd;
}
#tablero {
  margin: 20px auto;
  width: 640px;
  text-align: center;
}
#titulo {
  text-align: center;
  text-shadow: 1px 1px 2px black, 0 0 1em #4567e2, 0 0 0.2em #4567e2;
}
#cartas {
  margin: 10px 0 0 10px;
}
#cartas div {
  float: left;
  width: 100px;
  height: 100px;
  line-height: 95px;
  margin: 8px;
  border: 4px solid #4567e2;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
  background: #b1b1b1;
}
#cartas div span {
  display: none;
  font-weight: bolder;
  vertical-align: middle;
  line-height: normal;
}
#panel {
  font: 18px Verdana;
  color: #4567e2;
  display: inline-block;
  margin: 10px auto;
}
#panel .boton {
  color: #fff;
  background: #4567e2;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
}
#panel .boton:hover {
  color: #4567e2;
  background: #fff;
  border: 1px solid #4567e2;
}
```

#### El programa (JavaScript)

Primero declaramos las variables necesarias para acceder a los elementos de la página y mantener el estado del juego, las declaramos globales para que sean visibles en todo el programa.

``` js
var $cartaArriba = null, // Guarda la primera carta de una pareja de clicks
  $cartas = null, // Contenedor (div) de la lista de cartas
  $texto_panel = null, // Mensajes de texto
  numClicks = 0, // Contador de clicks
  parejas = 0, // Contador de parejas
  multiplicando = 0,
  multiplicador = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
```

  > **Buenas prácticas:** es habitual con JQuery nombrar las variables que guardarán objetos JQuery con un `$` inicial, para distinguirlas de resto.

Luego, mediante `$.ready` esperamos a que se haya cargado la página para iniciar la ejecución del programa. Recuperamos los elementtos HTML que cambiarán su contenido durante el juego (el `div` de cartas y el panel de mensajes) y empezamos.

``` js
$(function () {
  $cartas = $('#cartas');
  $texto_panel = $('#texto_panel');

  EmpezarJuego();
});
```

Cada vez que se empieza un juego debemos vaciar el contenedor de cartas, inicializar variables de estado y crear nuevas cartas.

``` js
function EmpezarJuego() {
  // Elimina cartas
  $cartas.empty();

  // Resetear texto del panel
  $texto_panel.html("0 clicks");

  // Inicializa variables
  numClicks = 0;
  parejas = 0;
  multiplicando = Math.floor(Math.random() * 8) + 2; // Número aleatorio entre 2 y 9

  // Crea cartas
  CrearCartas();
}
```

Para crear las cartas generamos primero en un array de 20 elementos, 10 strings con la operación de multiplicar y 10 con los resultados, y desordenamos dichos elementos.

Para cada elemento del array, creamos la carta: un contenedor `div` con el texto.

Finalmente para cada contenedor le asignamos un evento click que ejecuta la función `ClickCarta`.

``` js
function CrearCartas() {
  var listaCartas = [];

  // Crea la lista de multiplicaciones y resultados
  for (var i = 0; i < 10; i++) {
    listaCartas[i] = multiplicando + 'x' + multiplicador[i];
    listaCartas[i + 10] = eval(multiplicando * multiplicador[i]);
  }

  // Mezcla las cartas
  shuffle(listaCartas);

  // Crea las cartas
  for (i = 0; i < 20; i++) {
    $cartas.append('<div id=carta' + i + '><span>' + listaCartas[i] + '</span></div>');
  }
  // Añade un manejador del evento click a cada carta
  $cartas.children("div").click(ClickCarta);
}
```

No existe una función predefinida para mezclar el array, tenemos que escribir una. No reinventamos la rueda, buscamos algoritmos de ordenación y utilizamos la <a href="http://bost.ocks.org/mike/shuffle" target="_blank">solución</a> de Mike Bostock.

``` js
/* http://bost.ocks.org/mike/shuffle */
function shuffle(array) {
  var m = array.length,
      t, i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
```

Al hacer click a una carta, mediante `$(this)` accedemos a la carta en cuestión (al contenedor `div`). 

Lo primero es impedir que se vuelva a hacer click en la misma carta, para ello eliminamos el evento; contabilizamos los clicks y actualizamos el panel de mensajes de texto; y visualizamos la carta.

Si es la primera carta de la pareja, la guardamos (`$cartaArriba`) para compararla con la segunda en el próximo click. Si es la segunda, comprobamos si son iguales. Si lo son contabilizamos una pareja, si no las escondemos y les volvemos a asignar el evento click. Y empezamos ciclo de comparar parejas.

Finalmente comprobamos si hemos acabado el juego, o porque tenemos todas las parejas o porque hemos utilizado el número máximo de clicks.

``` js
function ClickCarta() {
  var $carta = $(this),
    $carta_span = $carta.find("span");

  // No se puede hacer click en esta carta
  $carta.off("click");

  // Contabiliza clicks
  numClicks++;
  $texto_panel.html(numClicks + ' clicks');

  // Visualiza la carta
  $carta_span.fadeToggle();

  // Primera carta
  if ($cartaArriba === null) {
    $cartaArriba = $carta;
  } else { // Segunda carta
    // Son iguales?
    if (eval($carta_span.text().replace('x', '*') + ' == ' + $cartaArriba.find("span").text().replace('x', '*'))) { // Sí
      parejas++;
    } else { // Diferentes
      $cartaArriba.find("span").delay(600).fadeToggle();
      $carta_span.delay(600).fadeToggle();
      // Habilitar el click nuevamente
      $cartaArriba.click(ClickCarta);
      $carta.click(ClickCarta);
    }
    $cartaArriba = null;
  }

  // Hemos terminado?
  if (parejas == 10) { // Todas las parejas
    $texto_panel.html('Has encontrado todas las parejas con ' + numClicks + ' clicks');
  } else if (numClicks == 40) { // Número máximo de intentos
    $texto_panel.html('Has llegado al máximo de intentos y sólo has conseguido ' + parejas + ' pareja' + (parejas > 1 ? 's' : ''));
    // Quita el manejador del evento click a todas las cartas
    $cartas.children("div").off("click");
  }
}
```

Código fuente del proyecto <a href="https://github.com/xguaita/mtig-js/tree/gh-pages/src/modulo6/jquery/memory" target="_blank">aquí</a>. 
