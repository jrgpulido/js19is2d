var a = 5
var b = 8
var c = 12
var s = .5 * (a+b+c)
var op = s*((s-a)*(s-b)*(s-c)) 
var r1 = Math.sqrt(op)
var r2 = 4*r1
var r = (a*b*c)/r2
print('El radio del circulo circunscrito en el triangulo es: '+r)
