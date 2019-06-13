class Car {
    constructor(name){
        this.name= name;
    }
    drive(){   }
    start(){return this.name + 'engines started...' + '\n';}
    toString(){return 'Hi, Mi name is ' + this.name;}

}

export{car};