function convertKil() {
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let ml = cant / 1.609;
    
    document.getElementById("kilo").innerHTML = ml.toFixed(2) }

 function convertMil(){
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let ki = cant * 1.609;
    
    document.getElementById("mill").innerHTML = ki.toFixed(2)
 }