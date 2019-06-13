function suma(p,b){

    if (typeof p!=='number' && typeof b!=='number' ){
	throw new Error ('error es letra');
    }
	
    if (b===0){
	throw new Error ('error es cero');
    }
   
    return p/b;
}

print(suma(6,'a'));
