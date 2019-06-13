class Fraction{
    constructor(n, d){ //validar: n,d
        this.n=n;
        this.d=d;};


    euclides(n,d){return d;};
    suma(f){
        var n = (this.n * f.d) + (this.d * f.n);
        var d = this.d * f.d;
        return new Fraction(n,d);};


    resta(f){
        var n = (this.n * f.d) - (this.d * f.n);
        var d = this.d * f.d;
        return new Fraction(n,d);};



    division(f){
        var n = this.n * f.d;
        var d = this.d * f.n;
        return new Fraction(n,d);};


    multi(f){//validate
        var n=this.n*f.n;
        var d=this.d*f.d;
        //euclides HERE
        return new Fraction(n,d);};

};

var f1=new Fraction(4,2);
var f2=new Fraction(5,4);


console.log(f1.suma(f2).n);
console.log(f1.resta(f2));
console.log(f1.multi(f2));
console.log(f1.division(f2));

/*  hacer suma, resta y multiplicacion*/ 
/*validar que sean enteros y que d=!0*/