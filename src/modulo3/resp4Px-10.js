function factorial(n) {
  var f= 1;
  
  for (var i= 2; i <= n; i++) f*= i;
    
  return f;
}

factorial(5);
