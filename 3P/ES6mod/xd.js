function get(){
    let t= document.getElementById("numbers").value
    var a=0;
    for (var i=0;i<t;i++){
        random = (Math.random());
        var to=random + "\n" + to;
        var xd=random *10;
        var dx=Math.round(xd);
        var result =dx + "\n" + result;
        document.getElementById("out").innerHTML = result
        
        
        if (dx> x){
            x=a;
        }

        if (y<dx){
            a=y;
        }

        
        document.getElementById("m").innerHTML = x
	document.getElementById("l").innerHTML = y
    

    }
    
}