class rectangulo{

    constructor(a,b,c,d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    toString(){
        return puntoRA.toString() + puntoRB.toString() + puntoRC.toString() + puntoRD.toString()
    }
}

//Puntos del rectangulo
const puntoRA = new Point()
const puntoRB = new Point(0,300)
const puntoRC = new Point(500,300)
const puntoRD = new Point(500)