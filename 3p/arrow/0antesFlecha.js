//jsc \\ jsshell

let antesFlecha=new Function('x','y','return x+y');
antesFlecha(3,2);
antesFlecha('Hola','JS');

//Traditional Function
let function multiply(a,b){
    return a*b;
}

//Arrow Function
let multiply=(a,b){
    return a*b;
};

//Arrow Function complete
let f1=function multiply(a,b){
    return a*b;
}


//Arrow Function
let multiply=(a,b)=>a*b;

