function ale(){
    
    let a= getElementById("numbers").value 
    
    for (var i=0;i<10;i++){
    random = (Math.random());
    var to=random + "\n" + to;
    var xd=random *10;
    var dx=Math.round(xd);
    var result =dx + "\n" + result;
    document.getElementById("out").innerHTML = to
    document.getElementById("xd").innerHTML = result
}
}