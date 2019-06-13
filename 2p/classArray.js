/*
Un escalar es un número

hacer inicializador
*/
class array{
    
    constructor(A){
        this.data=new Array();
        if(a){}


    };

    initialize(a,n){

    }
//data array de números
 //mínimo del array
 min(){
     let t=data[0];
     for(let x of data){
         if(t>x){
             t=x;
         }
     }
 };

 //mayor del array
 max(){
    let t=data[0];
    for(let x of data){
        if(t<x){
            t=x;
        }
    }
 };

 //sumar datos del array
 sum(){
     let t=data[0];
     var sum;
    for(x=0;x<t.length; x++){
        sum=sum+t[x];
    }
    return sum;
 };

 //promedio de datos del array
 avg(){
     let t=data[0];
     var avg;
     var sum;
     for(x=0;x<t.length; x++){
         sum=sum+t[x];
     }//for
     avg=sum/t.length;
     return avg;
 }

 //vectorizar=vectorize (0,1,10)
 // de 0 a 1, 10  puntos

 vectorize(po,pf,n){//a,b,k
    let data=new Array();
    var pts=(pf-po)/n;
    /*push agrega un valor al array */

    for(i=0; i<n;++i){
        data[i]=data+pts;
    }

 }
//Me regresa los elementos del vector
 getData(){}
/* P R O G R A M A C I Ó N    F U N C I O N A L: siguiuente tema*/


 
}