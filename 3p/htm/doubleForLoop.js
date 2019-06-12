//doubles using ForLoop : traditional
let doubleFL=function(list){
    for(var k=0;k<list.length;k++){
        list[k]=list[k]*2;//list[k]*=2;
    }
    return list;
}
let a=[5,4,3,2,1];
console.log(doubleFL(a));//result here