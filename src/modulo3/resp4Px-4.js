// Crea array de n elementos de números aleatorios entre min y max (0-100) o (min,min+100)
function creaArray(n, min, max) {
  var a= [];
  
  min= min || 0;
  max= max || min + 100;
  
  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
  
  return a;
}

console.log(creaArray(10));
console.log(creaArray(10, 100));
