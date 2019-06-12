function convertKel() {
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let cl = cant - 273.15;
    
    document.getElementById("cels").innerHTML = cl.toFixed(2)
}
 function convertCel(){
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let ke = cant + 273.15;
    
    document.getElementById("kelv").innerHTML = ke
 } 