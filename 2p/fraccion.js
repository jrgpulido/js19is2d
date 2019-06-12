class Fraction{
    constructor(n, d){ //validar: n,d
        this.n=n;
        this.d=d;
    };

    euclides(n,d){return d;};
    sum(f){
        
    };
    subt(f){
        
    };
    div(f){};
    mul(f){//validate
        var n=this.n*f.n;
        var d=this.d*f.d;
        //euclides HERE
        return new Fraction(n,d);        
    };
};

var f1=new Fraction(4,2);
var f2=new Fraction(5,4);

console.log(f1.mul(f2).n)

/*  hacer suma, resta y multiplicacion*/ 
/*validar que sean enteros y que d=!0*/
