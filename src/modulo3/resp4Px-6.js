// Máximo de la lista argumentos
function max() {
  var max= Number.NEGATIVE_INFINITY;
  
  for (var i= 0; i < arguments.length; i++) {
      if (arguments[i] > max) max= arguments[i];
  }
  
  return max;
}

max(23, 12, 45, 33, 100, 55, 38, 1);
