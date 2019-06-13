const power=(base, exponent) =>{
    let result=1;
    for (let count =0;count< exponent; count ++){
        result *=base;
    }
    return(result);
};
//power(2,3);
//Math.pow(2,3)
//** 
