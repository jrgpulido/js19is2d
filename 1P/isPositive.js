function isPositive (n){
    if (n>0)
	return true
    else
	return false
}
function isNegative(n){
  return !isPositive(n);
  }
  console.log(isPositive(3))
  console.log(isPositive(2))
  console.log(isPositive(-3))
  console.log(isPositive(-2))
