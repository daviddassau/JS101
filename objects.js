// How to define an object

var x = "humidity";

var weather = {
	currentTemp: 82,
	isRaining: false,
	humidity: "too much",
	'is-sunny': true
};

console.log(weather);
// Assigning a property to an object
weather.location = "Nashville";
weather['zipCode'] = 37212;

console.log(weather);

console.log(weather.isRaining);
console.log(weather['is-sunny']);

console.log("humidity", weather[x]); // x is finding the humidity property in the weather object, this displaying "humidity too much" in the console
console.log(weather.x);