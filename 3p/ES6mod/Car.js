class Car {
    constructor(name){
        this.name = name;
    }
    drive(){    }
    start(){return this.name + "engine started..." + "\n"; }
    toString(){return "hi, my name is " + this.name;}
}