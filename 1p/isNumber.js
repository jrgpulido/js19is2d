//isNumber(x)
//-> x
//<- true si es numero
//<- false si no es numero

//var isNumber=function(x){
    function isNumber(x){
    if(typeof x==='number')
	return true;
    else
	return false;}
print(isNumber(8));
print(isNumber('a'));
