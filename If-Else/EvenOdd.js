const prompt = require('prompt-sync')();
const number = prompt("Enter any number : ");
if(number % 2 == 0){
    console.log(number ," is Even number");
}else{
    console.log(number , " is Odd number");
}