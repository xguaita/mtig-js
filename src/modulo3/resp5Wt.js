// Máximo de la lista argumentos
function max() {
  var n= -Infinity;
  
  for (var i= 0; i < arguments.length; i++) {
      if (arguments[i] > n) n= arguments[i];
  }
  
  return n;
}

max(23, 12, 45, 33, 100, 55, 38, 1);
