var num=parseInt(prompt("Escibe un numero"));

if(typeof(num)==Nan){
    alert("¡Introduce solo numeros!")
}else{
document.write("<br>");
for(var i=1; i<11; ++i)
document.write(+num+"x"+i+": "+(i*num)+"<br>");}