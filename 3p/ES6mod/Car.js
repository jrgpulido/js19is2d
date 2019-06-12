//export

class Car {

    constructor(name){
        this.name=name;
    }//constructor

    drive(){}//drive

    start(){return this.name+' engine started...'+'\n';}//start

    toString(){return 'Hi, my name is '+this.name;}//toString

}//classCar

export {Car};