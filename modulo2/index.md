---
layout: default
title: Introducción al lenguaje de programación
desc: Introducción al lenguaje de programación. Programación con Javascript - Máster en tecnologías de la información geográfica (MTIG 17). UAB
folder: modulo2
---

# Introducción al lenguaje de programación

## Tipos de datos
Los programas trabajan manipulando datos, y los datos se representan mediante valores. Los lenguajes de programación categorizan los datos en tipos y tratan cada uno de ellos de diferente manera.

JavaScript define 6 tipos de datos:  

+ Tipos de datos primitivos  
  + String  
  + Number  
  + Boolean  
  + null  
  + undefined  
+ Objetos  

### String
Cadena de caracteres (letras, dígitos y símbolos) que representa valores textuales. Las cadenas de  texto se encierran entre comillas simples (') o dobles (").
El primer carácter de una cadena ocupa la posición 0. La cadena vacía se representa por `''` o `""`.

``` js
"abcdefg"
'07010'
'971173888'
"Curs d'organització del temps"
'<img src="./images/logo.png" target="_blank">'
```

### Number
Los números se utilizan para contar y calcular.
Al contrario de otros lenguajes de programación, en Javascript sólo existe un tipo numérico que representa valores enteros entre −9007199254740992 (−2<sup>53</sup>) y 9007199254740992 (2<sup>53</sup> -1), y decimales tan grandes como ±1.7976931348623157 × 10<sup>308</sup> y tan pequeños como ±5 × 10<sup>−324</sup>.

``` js
100
3.1415
6.02e23
1.4738223E-32
```

### Boolean
Tipo de datos lógico que representa _cierto_ o _falso_, _si_ o _no_, _encendido_ o _apagado_. Tiene dos valores posibles `true` y `false`.

### null
Valor que hace referencia a la ausencia de valor.

### undefined
Valor que hace referencia a la ausencia de una variable o propiedad de un objeto: no está definido.

### Objetos
Cualquier valor que no es un string, un número, un booleano, null o undefined es un objeto. Es una colección de propiedades donde cada propiedad tiene un nombre y un valor (un tipo primitivo o un objeto).
Las funciones son objetos que tienen código ejecutable asociado a ellos.

## Variables
La forma de guardar valores para posteriormente usarlos y manipularlos es mediante variables. Una variable es el nombre de un lugar donde se guardan datos.
Antes de utilizar una variable se _debe_ declarar mediante la palabra reservada `var`.

```js
var contador;
var nombre;
var x, y;
```

  > **Buenas prácticas:** aunque no es obligatorio declarar las variables, hacerlo es conveniente ya que evita problemas de ámbito como veremos más adelante

Los nombres de las variables deben empezar por una letra, `_` o `$`, no pueden empezar con un número ni cualquier otro símbolo. No se puede utilizar una <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_6" target="_blank">palabra reservada</a>. JavaScript es _case-sensitive_, es decir, distingue mayúsculas y minúsculas; no es lo mismo `miapp` que `miApp`.

Se asigna (guarda) un valor en una variable mediante el operador `=`.

```js
contador= 0;
nombre= 'Xisco';
```

Se recupera el valor almacenado mediante el nombre de la variable.

```js
nombre
// devuelve 'Xisco'
```

  > **Nota:** en JavaScript se utiliza `//` para escribir comentarios de una línea. Para comentar varias líneas se encierran entre `/*` y `*/`

&nbsp;

  > **Buenas prácticas:** es muy importante comentar el código. Los programas, con el tiempo, necesitan ser modificados (corregir errores, añadir nuevas funcionalidades, modificaciones de las existentes...) y los comentarios facilitan su comprensión, tanto a las personas que no los han escrito, como a los que sí lo han hecho
  
Se puede inicializar una variable (asignar un valor) cuando se declara.

```js
var contador= 0;
var nombre= 'Xisco';
var x= 3, y= 10;
```

Si no se le da un valor inicial a una variable cuando se declara éste es `undefined` hasta que, mediante código, se asigna uno.

Las variables no se declaran con un tipo (como ocurre en lenguajes como C o Java), adquieren de forma dinámica el tipo del valor que almacenan.

```js
var a= 1;
a= 'texto';
```

  > **Buenas prácticas:** elegir nombres de variables que describan el valor que almacenan.
  > Para guardar el nombre de una persona mejor `nombre` que `aj25`

El concepto del ámbito (_scope_) de una variable lo trataremos posteriormente cuando hablemos de las funciones.

## Expresiones, operadores y conversión de tipos
Hasta ahora hemos guardado valores literales en variables pero para que los programas sean útiles deben manipular estos valores para crear nuevos valores (aumentar un contador, aplicar un porcentaje a una lista de precios, personalizar un mensaje de bienvenida...).

A través de expresiones combinamos variables y valores mediante operadores para generar resultados. 

### Operadores
Lista ordenada por precedencia (de mayor a menor) de operadores:

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`++,--` | Incremento, decremento (pre y post) | D | 1
`+` | Convertir a número | D | 1
`-` | Negar un número | D | 1
`!` | Negar un booleano | D | 1
`delete` | Elimina una propiedad | D | 1
`typeof` | Tipo de dato | D | 1

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`*,/,%` | Multiplicar, dividir, resto | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`+,-` | Suma, resta | I | 2
`+` | Concatenar texto | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`<,<=,>,>=` | Comparar números o texto | I | 2
`instanceof` | Tipo de objeto | I | 2
`in` | Existe propiedad | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`==,!=` | Igual, distinto | I | 2
`===,!==` | Estrictamente igual, distinto | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`&&` | Y lógico | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`II` | O lógico | I | 2

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`?:` | Condicional | D | 3

Operador | Operación | Asociatividad | Cardinalidad
:------: | :-------- | :-----------: | :----------:
`=` | Asignación | D | 2
`*=,/=,+=,-=` | Opera y asigna | D | 2

Asociatividad: orden en que se realizan las operaciones con igual precedencia (I: de izquierda a derecha, D: de derecha a izquierda).

Mediante paréntesis () podemos modificar la precedencia de los operadores.

```js
var a= 10, b= 5, c= 100, d= '10';
console.log('a >= b ', a >= b);
console.log('2 * a * b == c ', 2 * a * b == c);
console.log('a == d ', a == d);
console.log('a === d ', a === d);
console.log('a > b && a > c ', a > b && a > c);
console.log('a > b || a > c ', a > b || a > c);
console.log('a * b + c ', a * b + c);
console.log('a * (b + c) ', a * (b + c));
console.log('a++ ', a++);
console.log('a ', a);
console.log('b ',++b);
console.log('a == 10 ? b : c ', a == 10 ? b : c);
console.log('a != 10 ? b : c ', a != 10 ? b : c);
console.log('a % b ', a % b);
var nombre= 'Juan', apellido= 'García';
console.log('Hola ' + nombre + ' ' + apellido);
```
<a href="http://repl.it/4D3" target="_blank">repl.it</a>

A las instrucciones o comandos en un lenguaje de programación los denominamos sentencias. Así como las expresiones se evaluan para obtener un valor, las sentencias se ejecutan para realizar una acción. Un programa no es más que una secuencia de sentencias a ejecutar.

  > **Nota1:** En JavaScript las sentencias se finalizan con punto y coma `;`  
  
&nbsp;

  > **Nota2:** la instrucción `console.log` escribe en la consola del entorno de ejecución JavaScript 

### Conversión de tipos
JavaScript convierte dinámicamente los tipos de datos para poder evaluar expresiones.

```js
var a= 10, b= '5';
console.log('a + b ', a + b);
console.log('a * b ', a * b);
```
<a href="http://repl.it/5D9" target="_blank">repl.it</a>

En la primera sentencia como una de las variables es textual (y todos los tipos de datos se pueden convertir a texto), la opción más segura es convertir la otra variable a texto y utilizar el operador `+` como concatenador de cadenas.
En el segundo caso el operador `*` actúa sobre valores numéricos, la unica opción es intentar convertir las variable no numéricas en números. En este caso ha sido posible, si no se hubiese generado un error `NaN` (_Not a Number_).

Se siguen las siguientes reglas de conversión:

+ A texto: siempre convierte a texto. Los objetos tienen el método `toString`, que veremos más adelante.  
+ A número: si no puede convertir devuelve `NaN`. Casos especiales: `true` devuelve 1, `false, null, '', []` devuelve 0, y `undefined` devuelve `NaN`.  
+ A booleano: `undefined, null, '', 0, -0, NaN` devuelven `false`, cualquier otro caso `true`.  

Cuando se utiliza el operador de igualdad `==` JavaScript realiza conversión de tipos para evaluar la expresión. Si se utiliza `===` no se realiza dicha conversión.

## Control de flujo
Hasta el momento hemos visto sentencias simples (básicamente declaraciones y asignaciones a variables). Pero ningún programa es una secuencia lineal de sentencias simples. Necesitamos dos tipos de estructuras que nos permitan:

+ Ejecutar o no determinadas intrucciones dependiendo de ciertas condiciones
+ Repetir múltiples veces la ejecución de un conjunto de instrucciones

Para ello los lenguajes de programación proporcionan estructuras de control de flujo.

### Condicionales
Ejecutan un conjunto de sentencias dependiendo del valor de una determinada expresión (condición).
El condicional principal de JavaScript es `if/else`, también proporciona la sentencia `switch` que tiene una sintaxis más complicada.

#### if/else
```js
if (condicion) {
  ...
}
```
Si la condición se cumple (la expresión se evalúa a `true`) se ejecuta el bloque de instrucciones. Si la condición no se cumple (`false`) no se ejecuta ninguna instrucción.

  > **Nota:** En JavaScript los bloques de instrucciones se encierran entre llaves `{...}`

```js
var a= 10;
if (a > 0) {
  console.log('a es mayor que 10');
}
if (a % 2 == 0) {
  console.log('a es un número par');
}
```

Si queremos que se ejecuten instrucciones cuando la condición no se cumpla añadimos `else`:

```js
if (a > 0) {
  console.log('a es mayor que 10');
} else {
  console.log('a es menor o igual que 10');
}
```

Se pueden enlazar tantos `if/else` como sean necesarios:

```js
if (a < 0) {
  console.log('a es un número negativo');
} else if (a == 0) {
  console.log('a es 0');
} else if (a <= 100) {
  console.log('a está entre 1 y 100');
} else {
  console.log('a es mayor que 100');
}
```

#### switch
La sentencia `switch` evalúa una expresión, compara su resultado con los valores de la cláusula `case` y ejecuta el bloque de sentencias si son iguales. 

```js
switch (expresion) {
  case valor1:
    ...
    break;
  case valor2:
    ...
    break;
  ...
  case valorN:
    ...
    break;
  default:
    ...
}
```

Ejemplos:

```js
switch (tipo) {
  case 0:
    valor=* 0.5;
    break;
  case 1:
    valor=* 0.75;
    break;
  case 2:
    valor=* 0.8;
    break;
  default:
    valor=* 0.2;
}
```

```js
switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miércoles':
  case 'jueves':
  case 'viernes':
    console.log('trabajo');
    break;
  default:
    console.log('descanso');
}
```

### Bucles
Supongamos que queremos escribir la tabla de multiplicar del 5. Una opción sería repetir 10 veces cada línea de la tabla con los valores adecuados:

```js
console.log('5 x 0 =', 0);
console.log('5 x 1 =', 5);
console.log('5 x 2 =', 10);
console.log('5 x 3 =', 15);
console.log('5 x 4 =', 20);
console.log('5 x 5 =', 25);
console.log('5 x 6 =', 30);
console.log('5 x 7 =', 35);
console.log('5 x 8 =', 40);
console.log('5 x 9 =', 45);
console.log('5 x 10 =', 50);
```
<a href="http://repl.it/4Dh" target="_blank">repl.it</a>

Perfecto! Pero... para qué escribimos un programa si hacemos nosotros todo el trabajo?

Los bucles permiten repetir bloques de código múltiples veces. JavaScript tienen cuatro sentencias de iteración: `while`, `do/while`, `for` y `for/in`, esta última la veremos más adelante.

#### while
Es el bucle básico de JavaScript. Repite el bloque de código mientras se cumpla una condición.

```js
while (condicion) {
  ...
}
```

Tabla del 5:

```js
var i= 0;
while (i <= 10) {
  console.log('5 x ' + i + ' = ' + 5 * i);
  i= i + 1; 
}
```
<a href="http://repl.it/4Dl" target="_blank">repl.it</a>

  > **Ejercicio:** escribir el mismo programa con una sola sentencia en el bloque del bucle.
  > <a href="http://repl.it/4Do" target="_blank">Respuesta 1</a>, <a href="http://repl.it/4Dp" target="_blank">respuesta 2</a>

&nbsp;

  > **Buenas prácticas:** aunque podría parecer que es mejor el código más corto, en este caso, es más difícil de entender.
  > Es mejor que nos quedemos con la solución más sencilla y comprensible. Recordad que el código se ha de mantener (modificar), generalmente por otras personas y/o pasado un tiempo.

#### do/while
Ejecuta el bloque de código una vez y evalúa la condición, si es cierta itera.

```js
do {
  ...
} while (condicion)
```

Tabla del 5:

```js
var i= 0;
do {
  console.log('5 x ' + i + ' = ' + 5 * i);
} while (++i <= 10);
```
<a href="http://repl.it/4Dt" target="_blank">repl.it</a>

#### for
El bucle `for` simplifica el código de las iteraciones que siguen un patrón: aquellas que inicializan una contador (variable), comprueban su valor para seguir iterando y, finalmente, incrementan el contador. Justamente nuestro ejemplo. 

```js
for (inicializacion; test; actualizacion) {
  ...
}
```

Tabla del 5:

```js
for (var i= 0; i <= 10; i++) {
  console.log('5 x ' + i + ' = ' + 5 * i);
}
```
<a href="http://repl.it/4Dv" target="_blank">repl.it</a>

  > **Ejercicio:** utilizando cualquier sentencia de iteración, escribir el programa que nos muestre cualquier tabla de multiplicar (del 1 al 10).
  > <a href="http://repl.it/4Dz/1" target="_blank">Respuesta</a>
