class cuadrado{
    
    constructor(a,b,c,d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    toString(){
        return puntoCA.toString() + puntoCB.toString() + puntoCC.toString() + puntoCD.toString()
    }
}

//Puntos del cuadrado
const puntoCA = new Point()
const puntoCB = new Point(0,500)
const puntoCC = new Point(500,500)
const puntoCD = new Point(500,0)