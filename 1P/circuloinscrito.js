var a = 5
var b = 8
var c = 12
var s = .5 * (a+b+c)
var op = (s*((s-a)*(s-b)*(s-c)))
var r1 = Math.sqrt(op)
var r = r1/s
print('El radio del circulo inscrito en el triangulo es: '+r)

