/*Lectura de 3 números*/
print ("Escribe el primer número:");
var a=parseInt(readline());

print("Escribe el segundo número:");
var b=parseInt(readline());

print("Escribe el tercer número:");
var c=parseInt(readline());

/*Indicar cual es el elemento neutro aditivo*/
if(a===0)
    print (a+" es el elemento neutro aditivo");
if(b===0)
    print (b+" es el elemento neutro aditivo");
if(c===0)
    print(c+" es el elemento neutro aditivo");

/*Imprimir cuadrado si es número negativo*/
if(a<0)
    print("cuadrado de "+a+": " +(parseInt(a*a)));
if(b<0)
    print("cuadrado "+b+": "+(parseInt(b*b)));
if(c<0)  
    print("cuadrado "+c+": "+parseInt((c*c)));

/*Imprimir perímetro*/
print("perimetro: "+(a+b+c));

/*Fórmula general*/
var x1=parseInt((-b-Math.sqrt((b*b)-4*(a*c))/2*a));
var x2=parseInt((-b+Math.sqrt((b*b)-4*(a*c))/2*a));
print("x1: "+(parseInt(x1)));
print("x2: "+(parseInt(x2)));

