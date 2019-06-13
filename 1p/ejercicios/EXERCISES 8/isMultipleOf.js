var a, num;

function isMultipleOf(num, a){
    var resto= num%a;
    if(resto==0)
    return true;
    else
    return false;
}

print(isMultipleOf(3,6));
print(isMultipleOf(6,3));