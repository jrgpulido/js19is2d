/*Declarar un robot*/
class Robot{
    constructor(name){
        this.name=name;
    };

    speak(){
        console.log('hablando...');
    };

    makeCoffee(){
        console.log('haciendo café...');
    };

    blinkLight(){
        console.log('parpadeando');
    };

};

var a=new Robot('aRobot');