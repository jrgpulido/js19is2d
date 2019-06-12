function isNegative(num){
    if(num<0)
    return true;
    else
    return false;
}

function isPositive(num){
    return!isNegative(num)
}

print(isNegative(-1));
print(isNegative(2));

print(isPositive(-1));
print(isPositive(2));
