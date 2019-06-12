function convertRad() {
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let gd = (cant * 180)/Math.PI;
    
    document.getElementById("radi").innerHTML = gd.toFixed(4) 
}
 
function convertGrad(){
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let radian = (cant * Math.PI)/180;
    
    document.getElementById("grd").innerHTML = radian.toFixed(4) 
 }