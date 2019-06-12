var aPoint = {//Literal Object
    x: 3,
    y:4,
}

var bPoint = {//Literal  Object
    x: -3,
    y:-4,
}

function distanceAB(p1,p2){
    var d1 = p2.x - p1.x;
    var d2 = p2.y - p1.y;

    d1 = Math.pow(d1,2);
    d2 = Math.pow(d2,2);

    return Math.sqrt(d1+d2);

}

alert(distanceAB(aPoint, bPoint));