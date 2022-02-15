//`firstItemIsNumber.js`: prompts the user for an array then logs out a boolean indicating 
//whether or not the first 
//item in the array is a number

const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Please enter an array: " ));
//let userItem= userArray[userArray.length-1]

let firstItem = typeof userArray[0];

if (firstItem === 'number'){
    console.log("The first Index is a number")

}else {
     console.log("The first Index is not a number")
}
