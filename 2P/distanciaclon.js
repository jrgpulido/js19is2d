class Point {
    constructor (x,y){
	if (typeof x='undefined' && typeof y ='undefined'){
          this.x=0;
	    this.y=0;
	}
	else{ 
	   this.x=x;
            this.y=y;
	}

































    };
toString (){return "("+this.x+","+this.y+")";};
distancia (p){};
clone() {return new Point (this.x, this.y);};
};
function distancia(p1,p3){
    var d1=(p3.x)-(p1.x)
    var d2=(p3.y)-(p1.y)
    d1=d1**2
    d2=d1**2
    d =Math.sqrt(d1+d2)
    return d
}
