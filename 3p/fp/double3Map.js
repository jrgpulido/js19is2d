//doubles using Map : no forEach : no k
let doubleWM=function(list){
    return list.map(function(number){
        return number*2;
    });
};

let a=[5,4,3,2,1];
console.log(doubleWM(a));//verify result