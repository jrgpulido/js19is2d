function argRequired(arg){
if (arg===null)
throw new Error ('error');
}
print (argRequired());
