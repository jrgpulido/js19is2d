function arg(arg){
    if(arg===null)
    throw new Error('El valor no puede ser 0');
}

function validar(a,b){
    if(typeof a==='number' && typeof b==='number'){
        arg(a,b)
    }
}

function task(){
    print('division');}
    //does return
    function div(a,b){
        arg();
        validar();
       
        return a/b;}
    
    print(div(4,2));
    task();
    print('done...');