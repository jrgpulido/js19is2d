var x, y, r;

print("Ingrese un valor para x");
x=readline();

print("Ingrese un valor para y");
y=readline();

print("¿Cuál es el valor del radio?");
r=readline();

var formula=Math.sqrt((x*x)+(y*y));
if (r>formula){
    print("El punto ("+x+","+y+") se encuentra dentro de la circunferencia");
}
if(r<formula){
    print("El punto ("+x+","+y+") se encuentra fuera de la circunferencia");
}
if(r===formula){
    print("El punto ("+x+","+y+") se encuentra sobre la circunferencia");
    
}

