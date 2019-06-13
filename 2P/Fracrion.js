class Fraction {
constructor (n,d){
this.n=n;
this.d=d;
};
mul (f){
var n= this.n*f.n;
var d= this.d *f.d;
return new Fraction(n,d);
};
};
var f1=new Fraction(4,2);
var f2=new Fraction(5,4);
console.log (f1.mul(f2).n)
