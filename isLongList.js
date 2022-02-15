//isLongList.js`: prompts the user for an array then logs out a boolean 
//indicating whether the array's length is at least 10

const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Please enter a Number array: " ));
//let userItem= userArray[userArray.length-1]
let firstItem = userArray [0];
console.log("The first item is: " + firstItem  );

if (arrayLength <= 10){
    console.log ("Array is Equal or Greater then 10")

} else if (arrayLength => 10){
    console.log("Array is Less then 10")
}
