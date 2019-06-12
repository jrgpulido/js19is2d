//doubles using Map : no forEach : no k
let mapExCube=function(list){
    return list.map(function(number){
        return number*number*number;
    });
};

let cube=[5,4,3,2,1];
console.log(mapExCube(cube));//verify result