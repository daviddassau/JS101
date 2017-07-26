console.log("in arrays");

var pokemon = "pikachu";

var array = [42,"string",null,"car",{},pokemon];

console.log(array[5]);
array[33] = "apple";
console.log(array.length);

//console.log(array[35]);




// Array Methods

console.log(array.indexOf("car"));

array.push("cat");
console.log(array); // Pushes "cat" the end of the array

array.pop();
console.log(array); // Removes last item from array

array.unshift("zoe is cool");
console.log(array); // adds string to the beginning of array

array.shift();
console.log(array); // removes first string from array

var newString = array.join("|");
console.log(newString); //
console.log(typeof newString); //

array = newString.split("|");
console.log(array);

var sentence = "http://www.meetup.com";
console.log(sentence.split("/"));
console.log(sentence.split(""));


var newArray = ["dog", "cat", "pig", "hippo"];
var numberArray = [3, 6, 12, 55, 8];

console.log(newArray.reverse()); //revereses the order of the array

console.log(newArray.sort()); //sort by alphabetical order
console.log(numberArray.sort()); //sort based on the first number (ie 12, 3, 55, 6, 8)

console.log(numberArray.sort(function(first,second){return first - second;})); // sort based on number low to high (ie 3, 6, 8, 12, 55)

console.log(newArray);
var result = newArray.slice(1, 3); // first number is index that the removal starts at, and second number is the amount of indexes it will remove
console.log(result);

console.log(numberArray);
var result = numberArray.splice(3, 1);
console.log(result);
console.log(numberArray);

console.log(numberArray[0]);



// For Loops

var newArray = ["dog", "cat", "pig", "hippo"];

for(var i = 0; i < newArray.length; i++){
	debugger;
	console.log("I'm at index " + i);
	console.log(array[i]);
}






















