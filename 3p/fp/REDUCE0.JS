
function reduce(array, apply, start){
    let current=start;
    for(let element of array){
        current=apply(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a,b)=>a+b,0))

/*MAP crea un nuevo array con los resultados corresponidentes al
aplicar la funcion 

el REDUCE aplica una funcio contra un acumulador
el acumulador va smando o multiplicacndo cada elemento del array
hasta que lo reduce hasta un unico termino*/