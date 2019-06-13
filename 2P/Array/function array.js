let arr =[2,3,-4,5,6];

function min(arr){
    let t=arr [0]

for (let x of arr){
    if (t>x)
    t=x
}
return t;
}

function max(arr){
    let a=arr [0]

for (let x of arr){
    if (a<x)
    a=x
}
return a;

}

function sum(arr){
    suma =0;
    for (k=0;k<arr.length; k++){
    suma+=arr[k]
    }
    return suma;
}
function prom (arr){
    suma =0;
    i=0;
    for (k=0;k<arr.length; k++){
    suma+=arr[k]
    i++;
    
    }
    return suma/i;
    
}

console.log(min(arr));
console.log(max(arr));
console.log(sum(arr));
console.log(prom(arr));