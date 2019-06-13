var aPoint={//literal object
 x:3,
 y:4

   distanceAB: function (bPoint){
    var d1=bPoint.x-p1.x
    var d2=p2.y-p1.y
    d1=d1**2// ** operador para elevear al cuadrado
    d2=d2**2
    return Math.sqrt(d1+d2);
 }
};

var bPoint={//literal oject
    x:3,
    y:4
}
