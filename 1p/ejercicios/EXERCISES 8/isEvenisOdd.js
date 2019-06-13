function isEven(x){
    if(x%2===0)
        return true;
        else
        return false;
}

function isOdd(x){
    return !isEven(x)
}
print(isEven(3))
print(isEven(2))

print(isOdd(3))
print(isOdd(2))
