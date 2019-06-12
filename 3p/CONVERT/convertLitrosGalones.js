function convertGal() {
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let lt = cant * 3.785;
    
    document.getElementById("lit").innerHTML = lt.toFixed(2) 
}
 function convertLit(){
    
    let cant = document.getElementById("cantidad").value
    
    cant = parseFloat(cant);
    
    let galo = cant / 3.785;
    
    document.getElementById("gal").innerHTML = galo.toFixed(2)
 }