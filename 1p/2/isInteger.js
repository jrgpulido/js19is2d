function isInteger(x){
    if((x%2)==0)
    return true;
    else
    return false;
}

function isntInteger(x){
    return !isInteger(x)
}

print(isInteger(0));
print(isInteger(.2));

print(isntInteger(0));
print(isntInteger(.2));
Number.isInteger(4);