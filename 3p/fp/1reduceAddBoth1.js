//onArray : both

const myArray=[22,9,60,2,4,56];

const avg=arr=>{ const sc=arr.reduce((ac,val)=>[ac[0]+val, ac[1]+1],[0,0])
return sc[0]/sc[1];
}

console.log(avg(myArray));

/*DECIR QUE HACE DEPURAR*/