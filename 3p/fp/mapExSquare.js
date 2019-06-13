//doubles using Map : no forEach : no k
let mapExSquare=function(list){
    return list.map(function(number){
        return number*number;
    });
};

let square=[5,4,3,2,1];
console.log(mapExSquare(square));//verify result