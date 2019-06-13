
function distancia(aPoint,bPoint){
    var d1=(bPoint.x)-(aPoint.x)
    var d2=(bPoint.y)-(aPoint.y)
    d1=d1**2
    d2=d1**2
    return Math.sqrt(d1+d2)
}
