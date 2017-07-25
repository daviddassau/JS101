// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.



// Take the contents of the sonnet div and place it in a variable.
var sonnetString = document.getElementById("sonnet").innerHTML; //taking two steps in one
console.log(sonnetString);

// Find and output the starting position of the word "orphans".
console.log(sonnetString.indexOf("orphans")); // the first character index of "orphans" is 401

// Output the number of characters in the sonnet.
console.log(sonnetString.length); //the length of the sonnet is 618

// Replace the first occurance of the string "winter" with "yuletide".
sonnetString = sonnetString.replace("winter", "yuletide")

// Replace all occurances of the string "the" with "a large".
sonnetString = sonnetString.replace(/^ the /g, " a large ");

// Set the content of the sonnet div with the new string.
document.getElementById("sonnet").innerHTML = sonnetString;