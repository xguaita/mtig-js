var a= [100, 200, ['a', 'b']],
    b= a[2];

b[1]= 'X';
a[2][2]= 'Y';
console.log('b', b);
