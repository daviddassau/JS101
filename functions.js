console.log("In Functions");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

// Example of 'Single Responsibility Principle'

function nuggetFacotry(animalInput) {
	// Chickens are cut up
	cutUpInput(animalInput)
	// Chickens are separated into chunks
	// Take the chucks and fry them
	// Package the nuggets
}


function cutUpInput (input) {
	var output = input * 20;
	return output;
}

// Function Declarations
// First way...
var summation;
var constant = 40;

function doesAdditionOne (numberOne, numberTwo) {
	summation = numberOne + numberTwo + constant;
}

doesAdditionOne(2, 3);

console.log(summation);


// Second way...
function doesAdditionTwo (numberOne, numberTwo) {
	var sum = numberOne + numberTwo;
	return sum;
}

console.log(doesAdditionTwo(2, 3));





// Function Expression (put a function inside of a variable)

var additionAction = function (first, second) {
	return first + second;
}

console.log(additionAction(4, 9));
























