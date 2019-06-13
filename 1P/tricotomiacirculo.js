print ('ingresa x;');
var x=Number (readline());
print ('ingresa y')
var y=Number (readline());
print ('ingresa el valor del radio');
var r=Number(readline());
var op =(x*x) + (y*y);
var h= Math.sqrt(op);

if (r>h){
print ('dentro');
}
else if (r<h){
    print ('fuera');
}
else{
print ('sobre');
}
