//onArray : sum

const myArray=[22,9,60,12,4,56];
const sum=(x,y)=>x+y;
const avg=myArray=>myArray.reduce(sum,0)/myArray.length
//let mySum=myArray.reduce(sum, 0);
console.log(avg(myArray))
