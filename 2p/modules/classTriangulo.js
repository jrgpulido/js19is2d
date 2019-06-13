class triangulo{

    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }

    toString(){
        return puntoTX.toString() + puntoTY.toString() + puntoTZ.toString()
    }
}
//Puntos del triangulo
const puntoTX = new Point(250)
const puntoTY = new Point(0,500)
const puntoTZ = new Point(500,500)