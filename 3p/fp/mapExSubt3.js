//doubles using Map : no forEach : no k
let mapExSubt3=function(list){
    return list.map(function(number){
        return number-3;
    });
};

let subt=[5,4,3,2,1];
console.log(mapExSubt3(subt));//verify result