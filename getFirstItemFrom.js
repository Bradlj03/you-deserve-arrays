//Write a program, `getFirstItemFrom.js` that prompts the user for an array, then 
//logs out the first item in that array
 

const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Please enter a Number array: " ));
//let userItem= userArray[userArray.length-1]
let firstItem = userArray [0];
console.log("The first item is: " + firstItem  );








