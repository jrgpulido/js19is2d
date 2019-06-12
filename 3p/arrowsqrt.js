let sroot = a => {
    var i=0;
    var x1;
    var x2;
    while( (i*i) <= a )
            i+=0.1;
    x1=i;
    
    for(let j=0;j<10;j++)
    {
        x2 = a;
        x2 /= x1;
        x2 += x1;
        x2 /= 2;
        x1 = x2;
    }
    return x2;
}