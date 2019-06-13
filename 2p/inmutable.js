var careful=3.1;
careful=1.3//watch out
var careful=null//worst

let price=120.25
let price=20.125//SyntaxError

const tax=0.825
/*No puedo redefinir*/
tax =1.25//TypeError, but jsshell

const sam={first: 'Sam', age: 2}
sam.age=3//however, cambia el 2 por un 3

const greet='dude'
greet[0]='r'//string are inmutable


const pearl=Object.freeze({first: 'pearl', age:1})
pearl.age=3//note, no hace el cambio de 1 a 3

/*PISTA*/
let x=3.1;
x instaceof Number
//
const sam={first: 'Sam', age:2}
sam instanceof Number
false
sam instace of Object
true

