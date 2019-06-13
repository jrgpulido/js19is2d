function argRequired(arg){
if (arg===0)
throw new Error ('error');
else 
return arg;
}
print (argRequired(5));
argRequired(5);
