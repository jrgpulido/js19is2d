class Point{
    constructor(x,y){//validate
        this._x=x;
        this._y=y;
    };

    toString(){return "("+this.x+","+this.y+")";};
    distancia(p1,p2){       
        /*calcular distancia*/       
            var d1=p2.x-p1.x
            var d2=p2.y-p1.y
            d1=d1**2// ** operador para elevear al cuadrado
            d2=d2**2
            var d= Math.sqrt(d1+d2);       
            return d;  
    };
    clone(){return new Point(this.x, this.y);};


get p1(){return this._p1;}
set p1(x){this._p1=p1;}
get p2(){return this._p2;}
set p2(x){this._p2=p2;}
};




