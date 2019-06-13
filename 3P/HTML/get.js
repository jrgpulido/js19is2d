function get(){
    let t= document.getElementById("get").value
    
    var texto=t;
    texto = texto.replace (/\r?\n/g," ");
	texto = texto.replace (/[ ]+/g," ");
	texto = texto.replace (/^ /,"");
	texto = texto.replace (/ $/,"");
    var textoTroceado = texto.split (" ");
	var numeroPalabras = textoTroceado.length;
	
    document.getElementById("out").innerHTML =numeroPalabras
}