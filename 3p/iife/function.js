//anonymous : echo iife

(function(x){return x;}(2))


(function (x){
    return function (y){
        return x*y;
    };
}) (2)(3);


//not iife
function hola(){
    console.log('Hola js mundo...');
    return 0;
}

//iife
(function hola(){
    console.log('Hola js mundo...');
    return 0;
})()

(function (x){
    return function(y){
        return x*y;
    };
})(10)(5)

(function (x){
    return function (y){
        return function(z){
            return x+y+z;
        };
    };
}) (1)(2)(3);

/* : an inmediately-invoked function  */

