---
layout: default
title: Objetos predefinidos, arrays y funciones
desc: Objetos predefinidos, arrays y funciones. Programación con Javascript - Máster en tecnologías de la información geográfica (MTIG 17). UAB
folder: modulo3
---

# Objetos predefinidos, arrays y funciones
El tipo de datos fundamental de JavaScript es el **objeto**. Un objeto es un dato complejo, una colección _no ordenada_ de propiedades cada una formada por un _nombre_ y un _valor_. Este valor es un tipo de dato primitivo o un objeto.

En JavaScript todo lo que no es un string, un numero, `true`, `false`, `null` o `undefined` es un objeto. Incluso los strings, números y booleanos se comportan como objetos _inmutuables_ (no podemos modificar sus propiedades).

  > **Nota:** JavaScript distingue entre valores primitivos (string, numero, booleano, `null` y `undefined`) que son _inmutables_ y el resto de objetos que son _mutables_ tratando a los primeros por **valor** y a los segundos por **referencia**.  

Podemos distinguir tres categorías o clases de objetos:  

+ Objetos nativos definidos por la propia especificación JavaScript (ECMAScript). En este tema nos centraremos en ellos  
+ Objetos de plataforma, son aquellos que pone a nuestra disposición el entorno de ejecución (_runtime environment_) JavaScript, como el navegador o Node.js. Los estudiaremos en el tema _JavaScript en el navegador_  
+ Objetos de usuario, que son aquellos que se crean por programa durante la ejecución de código JavaScript. Veremos cómo crearlos en el próximo tema  

A continuación estudiaremos los principales objetos nativos que define JavaScript.

## Propiedades y funciones del objeto global
Principales propiedades (valores) y funciones del _ámbito_ global:

| Propiedad | Descripción |  
| --------- | ----------- |  
| `NaN`| No es un número (Not a Number) |  
| `Infinity` | Valor infinito |  

| Funciones | Descripción |  
| --------- | ----------- |  
| `eval(string)`| Evalúa código JavaScript |  
| `isNaN(valor)` | Evalúa si valor es _NaN_ |  
| `parseInt(string [,base])`| Devuelve el texto convertido en valor numérico entero o _NaN_ |  
| `parseFloat(string)` | Devuelve el texto convertido en valor decimal o _NaN_ |  

## String
Ademas del tipo de dato string JavaScript define el objeto `String` que ofrece un conjunto de propiedades muy útiles a la hora de trabajar con cadenas de texto.

Mediante la conversión de tipos se transforma un tipo primitivo en objeto `String` al intentar utilizar una de sus propiedades.

```js
var a= 'Hola', // Tipo primitivo
    b= new String('Hola'); // Objeto String
    
console.log('Tipo dato a:', typeof a);
console.log('Tipo dato b:', typeof b);
console.log('a == b', a == b);
console.log('a === b', a === b);
console.log('Longitud a:', a.length);
```
<a href="http://repl.it/4HI" target="_blank">repl.it</a>

  > **Nota1**: el operador `new` crea e inicializa un nuevo objeto

&nbsp;

  > **Nota2:** a las propiedades de un objeto se accede mediante el operador punto `.` o los corchetes `[]` y nombre de la propiedad entre comillas (simples o dobles)

Principales propiedades y métodos del objeto `String`:  

| Propiedad/método | Descripción |  
| --------- | ----------- |  
| `length`| Longitud de la cadena de texto |  
| `charAt(indice)`| Devuelve el carácter de la posición indicada |  
| `indexOf(string), lastIndexOf(string)` | Devuelve el índice (posición) de la primera (o última) ocurrencia de un string, -1 si no lo encuentra |  
| `replace(regex, string)` | Busca y reemplaza un string por otro, trabaja con expresiones regulares |  
| `search(regex)` | Busca un texto dentro del string, si lo encuentra devuelve el índice si no -1, trabaja con expresiones regulares |  
| `split(string)` | Rompe un string en trozos mediante un _separador_ y los devuelve como un objeto `Array` |  
| `slice(indice1[, indice2]), substr(indice[, longitud]), substring(indice1[, indice2])` | Devuelve una sección del string. De índice a índice (permite negativos), de índice a longitud, y de índice a índice, respectivamente |  
| `toLowerCase(), toUpperCase()` | Devuelve el string con todas las letras en minúsculas y mayúsculas, respectivamente |  
| `trim()` | Elimina los espacios iniciales y finales de un string |  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">Ampliar información...</a>

  > **Nota:** el punto de partida para conocer la sintaxis y semántica de todos los componentes de un lenguaje de programación debería ser la especificación del lenguaje, en nuestro caso <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5" target="_blank">ECMAScript 5.1</a> pero, como toda especificación, es muy poco didáctica. Un buen manual de referencia de tecnologías web HTML, CSS, y por supuesto JavaScript es <a href="https://developer.mozilla.org/en-US/" target="_blank">Mozilla Developer Network (MDN)</a>

```js
var a= 'La lluvía en Sevilla es una auténtica maravilla';
console.log('Longitud:', a.length);
console.log('Buscar Sevilla:', a.indexOf('Sevilla'));
console.log('Buscar Palma:', a.indexOf('Palma'));
console.log('Reemplaza maravilla:', a.replace('maravilla', 'pesadilla'));
console.log('Devuelve Sevilla:', a.substr(13, 7));
console.log('Mayúsculas:', a.toUpperCase());
console.log('Rompe con espacios:', a.split(' '));
```
<a href="http://repl.it/4H6" target="_blank">repl-it</a>

  > **Ejercicio**: dada la cadena de texto `0123456789`, recuperar los tres primeros caracteres, los 3 últimos, y del índice 2 al 7 (incluido)  
  > <a href="http://repl.it/5WG" target="_blank">Respuesta</a>

## Date
El objeto `Date` representa un instante en el tiempo (fecha y hora).

Para crear un nuevo objeto `Date` JavaScript proporcioina cuatro constructores:

```js
new Date(); // Fecha y hora actual
new Date(numero); // Número de milisegundos desde 1 de enero de 1970 UTC
new Date(texto); // Fecha y hora en texto según YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601)
new Date(anyo, mes[, dia[, hora[, minutos[, segundos[, milisegundos]]]]]);
```

Principales métodos del objeto `Date` (hora local):  

| Propiedad/método | Descripción |  
| --------- | ----------- |  
| `getDay(), getDate(), getMonth(), getFullYear()` | Devuelve el día de la semana (0-6), del mes, el mes (0-11) y el año, respectivamente, en hora local |  
| `getHours(), getMinutes(), getSeconds(), getMilliseconds()` | Devuelve las horas, minutos, segundos y milisegundos, respectivamente |  
| `setDay(dia), setDate(dia), setMonth(mes), setFullYear(año)` | Establece el día de la semana (0-6), del mes, el mes (0-11) y el año, respectivamente |  
| `setHours(hora), setMinutes(minuto), setSeconds(segundo), setMilliseconds(milisegundo)` | Establece las horas, minutos, segundos y milisegundos, respectivamente |  
| `toString(), toDateString(), toTimeString()` | Devuelve fecha y hora, fecha, y hora, respectivamente |  
| `toLocaleString(), toLocaleDateString(), toLocaleTimeString()` | Devuelve fecha y hora, fecha, y hora con formato de sistema, respectivamente |  
| `toJSON(), toISOString()` | Devuelve fecha y hora en formato ISO 8601 |  
| `toUTCString()` | Devuelve fecha y hora UTC o GMT |  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">Ampliar información...</a>

```js
var d=new Date(); // Fecha y hora actual
console.log('Día de la semana', d.getDay());
console.log('Día del mes', d.getDate());
console.log('Mes', d.getMonth());
console.log('Año', d.getFullYear());
console.log('Hora', d.getHours());
console.log('Minutos', d.getMinutes());
console.log('Fecha', d.toLocaleDateString());
console.log('ISO 8601', d.toISOString());
```
<a href="http://repl.it/4K6" target="_blank">repl-it</a>

  > **Ejercicio:** dada la fecha actual, en qué día de la semana nos encontramos (lunes, martes...)?  
  > <a href="http://repl.it/4K8" target="_blank">Respuesta1</a>, <a href="http://repl.it/4Ka" target="_blank">Respuesta2</a>

&nbsp;

  > **Ejercicio:** dada cualquier fecha, devolverla formateada como dd-mm-yyyy  
  > <a href="http://repl.it/5WQ" target="_blank">Respuesta</a>

## Math
Objeto que proporciona constantes y funciones matemáticas. Al contrario que los anteriores no podemos crear nuevos objetos `Math`, existe un único objeto que podemos utilizar para realizar las operaciones matemáticas.

Algunas propiedades y métodos del objeto `Math`:  

| Propiedad/método | Descripción |  
| --------- | ----------- |  
| `PI` | Número PI |  
| `sin(x), cos(x), tan(x)` | Seno, coseno y tangente, respectivamente |  
| `asin(x), acos(x), atan(x)` | Arcoseno, arcocoseno y arcotangente, respectivamente |  
| `max([x[,y[,…]]]), min([x[,y[,…]]])` | Máximo y mínimo de una lista de números, respectivamente |  
| `sqrt(x)` | Raiz cuadrada |  
| `pow(x,y)` | x<sup>y</sup> |  
| `round(x)` | Redondea a entero |  
| `random()` | Genera un un número aleatorio entre [0 y 1) |  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">Ampliar información...</a>

```js
console.log('Máximo de 100, 25, 38, 200, 150:', Math.max(100, 25, 38, 200, 150));
console.log('Redondear 1.7523:', Math.round(1.7523));
console.log('PI', Math.PI);
console.log('Número aleatorio', Math.random());
console.log('Raiz cuadrada de 100:', Math.sqrt(100));
```
<a href="http://repl.it/4Ko" target="_blank">repl-it</a>

  > **Ejercicio:** simular la tirada de una moneda, cara o cruz?  
  > <a href="http://repl.it/4Kq/1" target="_blank">Respuesta</a>

## El objeto Array  
Un array es una colección **ordenada** de elementos (valores). Cada elemento tiene una posición denominada índice. El primer elemento tienen índice 0. Los elementos del array pueden ser de cualquier tipo (datos primitivos, objetos, arrays...), y dentro del array puede haber elementos de diferentes tipos. Se accede a los elementos por su índice mediante corchetes `[]`.

Formas de crear arrays:

```js
var a= new Array(), // Array vacío
    b= [],
    c= new Array(20), // Array vacío de 20 elementos
    d= [20],
    e= new Array(10, 20, 30, 40), // Array de 4 elementos
    f= [10, 20, 30, 40];
```

Acceso a los elementos del array:

```js
var a= [10, 'texto', new Date()];
console.log('2º elemento:', a[1]);
console.log('Acceso a objeto Date:', a[2].getFullYear());
console.log(a);
a[0]= 1000;
console.log(a);
```
<a href="http://repl.it/4L2" target="_blank">repl-it</a>

  > **Ejercicio:** ahora que sabemos más cosas, dada la fecha actual en qué día de la semana nos encontramos (lunes, martes...)?  
  > <a href="http://repl.it/4K8/1" target="_blank">Respuesta</a>

La propiedad `length` devuelve el número de elementos del array. Pero si le asignamos un valor aumenta o disminuye su tamaño.

```js
var a= [];
console.log('Tamaño', a.length);
a= [10, 20, 30];
console.log('Tamaño', a.length);
a[10]= 1000;
console.log('Tamaño', a.length);
console.log('Índice 5:', a[5]);
a.length= 2;
console.log(a);
```
<a href="http://repl.it/4L2/1" target="_blank">repl-it</a>

Algunos métodos del objeto `Array`:

| Método | Descripción |  
| --------- | ----------- |  
| `concat(array/valores)` | Junta los dos arrays y devuelve el resultado |  
| `unshift(), push(valor)` | Añade un valor al principio y al final del array y devuelve la longitud, respectivamente |  
| `shift(), pop(valor)` | Recupera y elimina un valor al principio y al final del array, respectivamente |  
| `join(separador)` | Crea un string con los elementos del array |  
| `slice(indice1, indice2)` | Extrae una sección del array |  
| `splice(indice, numero)` | Elimina elementos del array |  
| `reverse()` | Invierte el orden de los elementos |  
| `sort()` | Ordena los elementos |  
| `indexOf(valor[, indice]), lastIndexOf(valor[, indice])` | Busca un elemento y devuelve su índice o -1 si no lo encuentra, desde el principio o el final |  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Ampliar información...</a>

```js
var a= ['azul', 'rojo', 'verde', 'amarillo'];
console.log('verde?', a.indexOf('verde'));
console.log('negro?', a.indexOf('negro'));
a.unshift('blanco');
console.log(a.join('-'));
```
<a href="http://repl.it/4L2/4" target="_blank">repl-it</a>

Recorrer los elementos del array:

```js
var a= ['azul', 'rojo', 'verde', 'amarillo'];
for (var i= 0; i < a.length; i++) console.log(a[i]);
for (i in a) console.log(a[i]);
```
<a href="http://repl.it/4L2/3" target="_blank">repl-it</a>

  > **Ejercicio**: dada una cadena de texto y un carácter (o secuencia de caracteres), eliminar estos últimos de la cadena de texto  
  > <a href="http://repl.it/5Vq" target="_blank">Respuesta</a>

&nbsp;

  > **Pregunta:** dado el siguiente código, cuál es el valor de b?  
  > <a href="http://repl.it/5Wm" target="_blank">Respuesta</a>

``` js
var a= [100, 200, ['a', 'b']],
    b= a[2];

b[1]= 'X';
a[2][2]= 'Y';
```


## Funciones 
Cuando los programas crecen es frecuente utilizar múltiples veces las mismas instrucciones (validar fecha, ordenar elementos, calcular totales...). Si repetimos estos conjuntos de instrucciones se complica el programa ya que, por un lado, es más largo; y por otro cuando se han de modificar las instrucciones repetidas se ha de hacer en todas ellas.

La solución es agrupar bloques de código con una funcionalidad bien definida en **funciones**. Se definen una vez, se modifican en un único lugar y se ejecutan tantas veces como sea necesario.

En JavaScript las funciones son objetos.

Las funciones son parametrizables, su definición puede incluir una lista de identificadores llamados _parámetros_ que actúan como variables locales en el bloque de código de la función. Al llamar a una función (_invocar_ o ejecutar la función) proporcionamos valores (_argumentos_) a los parámetros de la función.

Las funciones pueden devolver un valor, si lo hacen emplean la palabra reservada `return`.

Se pueden asignar funciones a variables y a propiedades de objetos.

### Definir funciones
Las funciones se definen con la palabra reservada `function`:

```js
function nombreFunc([param1[, ...[, paramN]]]) { // Parámetros opcionales
  ...
  codigo de la funcion
  ...
  return valor; // Opcional
}
```
  > **Buenas prácticas:** el nombre de las funciones puede ser cualquier identificador válido en JavaScript (mismas reglas que las variables). Las funciones realizan una acción por ello su nombre debería ser un verbo o una frase que comience por un verbo y, por convención, en minúscula. Cuando hay más de una palabra se separan por `_` o se escriben en _CamelCase_: `imprimir_todos` o `imprimirTodos` (mejor)

Ejemplos:

```js
// console.log de los elementos de un array
function logArray(a) {
  for (var i= 0; i < a.length; i++) console.log(a[i]);
}

// x al cubo x*x*x
function cubo(x) {
  return x*x*x;
}

var laborables= ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

// invoca logArray, laborables es el argumento
logArray(laborables);

// invoca cubo en una expresión
console.log(1000000 + cubo(6));
```
<a href="http://repl.it/5Vl" target="_blank">repl-it</a>

  > **Nota:** para que la función devuelva más de un valor hay que devolver un objeto, por ejemplo un array (lista de valores)

```js
// Crea array de n elementos de números aleatorios entre min y max
function creaArray(n, min, max) {
  var a= []; 
  
  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
  
  return a;
}

var numeros= creaArray(10, 0, 1000);

console.log('numeros:', numeros);

console.log(creaArray(5, 10, 20));
console.log(creaArray(20, 1, 50));
```
<a href="http://repl.it/4Px/1" target="_blank">repl-it</a>

  > **Pregunta:** qué devuelve una función que no devuelve ningún valor (no tiene `return` o éste no devuelve un valor)?

&nbsp;

  > **Ejercicio**: modificar la función para que devuelva un array ordenado (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">ver</a> método `sort()`)  
  > <a href="http://repl.it/4Px/2" target="_blank">Respuesta</a>


### Argumentos y parámetros
JavaScript no verifica ni el número ni el tipo de los argumentos con que se invoca una función. Nos podemos encontrar con funciones que se invocan con menos argumentos que parámetros se han definido (parámetros opcionales), y funciones que se invocan con más (lista variable de argumentos).

#### Parámetros opcionales
Cuando se invoca una función con menos argumentos que los parámetros declarados, los parámetros adicionales tienen valor `undefined`. Es tarea de la función comprobarlo y proporcionar valores por defecto.

Supongamos que si proporcionamos un sólo argumento (número de elementos) a la función `crearArray` crea números aleatorios entre 0 y 100.

```js
// Crea array de n elementos de números aleatorios entre min y max (0-100)
function creaArray(n, min, max) {
  var a= [];
  
  if (min === undefined || max === undefined) {
    min= 0;
    max= 100;
  }
  
  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
  
  return a;
}

console.log(creaArray(10));
```
<a href="http://repl.it/4Px/3" target="_blank">repl-it</a>

  > **Nota1:** los parámetros opcionales deben ser los últimos

&nbsp;

  > **Nota2:** en lugar de utilizar condicionales se suele emplear la fórmula `min= min || 0` y `max= max || 100`, el operador `||` devuelve el primer operando si éste es verdadero o el segundo si es falso

&nbsp;

  > **Ejercicio:** modificar la función, añadir el caso de proporcionar dos argumentos (número de elementos y valor mínimo). Si no se proporciona el tercer parámetro éste debe ser el valor mínimo más 100.  
  > <a href="http://repl.it/4Px/4" target="_blank">Respuesta</a>

#### Lista variable de argumentos
Las funciones cuentan con una _propiedad_ denominada `arguments` que es un objeto con la lista de argumentos pasados a la función. Mediante su propiedad `length` obtenemos el número de argumentos y accedemos a ellos mediante su índice (como un array).

```js
// Función que sólo lista argumentos
function listaArgumentos() {
  console.log('Argumentos:', arguments.length);
  
  for (var i= 0; i < arguments.length; i++) console.log(arguments[i]);
}

listaArgumentos();
listaArgumentos(1, 2, 'texto');
listaArgumentos([10, 20]);
```
<a href="http://repl.it/4Px/5" target="_blank">repl-it</a>

  > **Ejercicio:** escribir una función que devuelva el número mayor de todos los pasados como argumentos.  
  > <a href="http://repl.it/5Wt" target="_blank">Respuesta</a>

### Alcance
_Scope_ o alcance hace referencia a la visibilidad de las variables. Es un concepto importantísimo en la programación con JavaScript. Variables _globales_ tienen alcance global (todo el programa), variables _locales_ tienen alcance local (función en la que han sido definidas). Los parámetros de las funciones tienen alcance local al cuerpo de la función.

JavaScript es un lenguaje donde **las funciones definen la visibilidad de las variables**. Todas las variables declaradas fuera de una función son variables globales.

En el cuerpo de una función las variables locales (y los parámetros) tienen preferencia sobre las variables globales. Cuando declaramos una variable dentro de una función es obligatorio utilizar `var` para crear una variable local a la función, si no creamos una variable global.

```js
var a= 'global1',
    b= 'global2';

function ambito() {
  var a= 'local1',
      c= 'local2';
  
  console.log(a);
  console.log(b);
  console.log(c);
  a= 'otro valor local';
  console.log(a);
  b= 'otro valor global';
}

ambito();
console.log(a);
console.log(b);
console.log(c);
```
<a href="http://repl.it/4Px/7" target="_blank">repl-it</a>

Los parámetros son variables locales:

```js
var a= 10;

function asignar100(x) {
  console.log(x);
  x= 100;
}

asignar100(a);
console.log(a);
```
<a href="http://repl.it/4Px/8" target="_blank">repl-it</a>

  > **Ejercicio:** escribir la función contarPalabras a la que se le pasa un string y devuelve el número de palabras  
  > <a href="http://repl.it/4Px/31" target="_blank">Respuesta</a>

&nbsp;

  > **Ejercicio:** escribir la función factorial a la que se le pasa un número y devuelve su <a href="http://es.wikipedia.org/wiki/Factorial" target="_blank">factorial</a>  
  > <a href="http://repl.it/4Px/10" target="_blank">Respuesta1</a>, <a href="http://repl.it/4Px/11" target="_blank">Respuesta2</a>

Se pueden definir funciones dentro de funciones. Las funciones internas _ven_ las variables declaradas en las externas.

``` js
function externa() {
  var a= 'variable local externa';
  
  // Definición de una función interna
  function interna() {
    console.log(a);
  }
  
  interna(); // Invocar función interna
}

externa();
```
<a href="http://repl.it/5Da" target="_blank">repl-it</a>
