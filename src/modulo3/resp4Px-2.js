// Crea array ordenado de n elementos de números aleatorios entre min y max
function creaArray(n, min, max) {
  var a= []; 
  
  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
  
  return a.sort(function(a,b){return a-b;});
}

var numeros= creaArray(10, 0, 1000);

console.log('numeros:', numeros);

console.log(creaArray(5, 10, 20));
console.log(creaArray(20, 1, 50));
