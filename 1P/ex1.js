print('escribe el primer numero : ' );
var a=Number( readline());
print ('escribe el segundo numero: ');
var b=Number( readline());
print ('escribe el segundo numero: ');
var c=Number(readline());


if (a===0)
 print (a + ': es cero');

  if (b===0)
 print  (b + ': es cero');

 if  (c===0)
 print (c + ': es cero');

if (a<0)
 print (a*a );
 if (b<0)
 print (b*b);
  if (c<0)
 print (c*c );

 s =a + b + c;
 print ('el perimetro del triangulo es:' +s);

var z=(b*b)-(4*a*c);
z= Math.sqrt(z);
var cuadratica1= -(b)+z;
cuadratica1= cuadratica1/(2*a);
print ('1ª raiz='+ cuadratica1);
var cuadratica2= -(b)-z;
cuadratica2= cuadratica2/(2*a);
print ('2ª raiz='+ cuadratica2);
