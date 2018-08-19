//True or False is a number even
function isEven(num) {
	if (num%2 === 0) {
		return true;
	}
	else if (num%2 !== 0) {
		return false;
	}
}

//Factorial of a number
function factorial(num) {
	if (num < 0)
		return -1;
	else if (num === 0)
		return 1;
	else {
		return (num * factorial(num - 1));
	}
}

//kebab to snake
function kebabToSnake(str) {
	var myString = str.replace(/-/g , "_");
	return myString;
}