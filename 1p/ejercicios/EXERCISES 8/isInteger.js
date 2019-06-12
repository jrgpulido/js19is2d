function isInteger(num){
// devuelve el valor entero redondeado más alto de la variable num:

    if(num-Math.floor(num)==0)
        return true;
        else 
       return false;
    }
print(isInteger(1));
print(isInteger(2.3));

    
