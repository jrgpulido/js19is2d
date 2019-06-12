    function convertEur() {
    
    
    let cant = document.getElementById("cantidad").value
    
    let dol = cant * 1.1133;
    
    document.getElementById("first").innerHTML = dol.toFixed(2)
}

 function convertDol(){
    let cant = document.getElementById("cantidad").value
    
    let eur = cant * 0.89815;
    
    document.getElementById("second").innerHTML = eur.toFixed(2)
 }