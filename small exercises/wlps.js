//Print all numbers between -10 and 19

console.log("Print all numbers between -10 and 19")

var qOneNum = -10
while(qOneNum <= 19) {
	console.log(qOneNum);
	qOneNum++;
}

//Print all even numbers between 10 and 40

console.log("Print all even numbers between 10 and 40")

var qTwoNum = 10
while(qTwoNum <=40) {
	console.log(qTwoNum);
	qTwoNum +=2;
}

//Print all odd numbers between 300 and 333

console.log("Print all odd numbers between 300 and 333")

var qThreeNum = 300

while(qThreeNum <=333) {
	if(qThreeNum % 2 !== 0) {
		console.log(qThreeNum);
	}
	qThreeNum++;
}

//Print all numbers divisible by 5 and 3 between 5 and 50

console.log("Print all numbers divisible by 5 and 3 between 5 and 50")

var qFourNum = 5

while(qFourNum <=50) {
	if(qFourNum % 5 === 0 && qFourNum % 3 === 0) {
		console.log(qFourNum);
	}
	// else if(qFourNum % 3 === 0) {
	// 	console.log(qFourNum);
	// }
	qFourNum++;
}