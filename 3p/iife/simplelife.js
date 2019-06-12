// : an inmediately-invoked function expression (iife)

var abc=(function(){
    return{
        hello:function hello(){
            return 'Hello, world!';
        }
    };
}())

abc.hello();