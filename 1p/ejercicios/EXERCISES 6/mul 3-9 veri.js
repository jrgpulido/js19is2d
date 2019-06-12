function verificar(){
    if (typeof(i)!='number'){
        throw new Error('no es un numero');
    }else{
        var multi=1;
        for(var i=3;i<9;++i){
            if(i%2===0)
            //print (i)
            var multi=multi*i;
        }
        
            print ("multiplicación: " +multi);
            
    }
        
}    

verificar();



       