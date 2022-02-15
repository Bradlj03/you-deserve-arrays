const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Please enter an array: " ));
//let userItem= userArray[userArray.length-1]
let firstItem = userArray [0];
let thirdItem = userArray [2];
let arrayLength = userArray.length;
let lastItem = userArray [arrayLength-1];

if (arrayLength >= 3){
    console.log("The third Item is" + thirdItem )
} else{
    console.log("the last index in the array is" + lastItem)

}



//Write a program `getIndex3.js` that prompts the user for an array then logs out the 
//item at the 3rd index. If there are not four items (i.e., if there is no index 3)
//, it logs out the value at the last index














/*      if arrayLength >= 3 
consolr.log
else 
*/


/*
for (let count = 0; count <= 10++;) {
    console.log(count);
}*/