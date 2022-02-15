const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Please enter an array: " ));
let userItem= userArray[userArray.length-1]

console.log("The last item is: " + userItem  );
