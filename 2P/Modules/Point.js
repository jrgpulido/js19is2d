class Point {
constructor(x,y){
this.x=x;
    this.y=y;
    print ('geometry');
};
toString (){return "("+this.x+","+this.y+")";};
distance(p){};
clone() {return new Point (this.x, this.y);};
};
