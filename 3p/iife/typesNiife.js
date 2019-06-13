// 1 a named function dedclaration : the most common one
function foo(){
    console.log('called foo!'); //print
}


//an anonymous function expression
var bar=function(){
    console.log('Called bar!');//print
}

//an anonymous iife function 
(function(){
    console.log('This function is invoked inmediately!');//print
})();

//alternate syntax
(function(){
    console.log('This function is ALSO invoked inmediately!');//print
}());//here

//these have to be invocated
foo();
bar();
