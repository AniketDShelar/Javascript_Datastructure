const prompt = require('prompt-sync')();

let min = prompt("Enter minimum number in range : ");
let max = prompt("Enter maximum number in range : ");
let isPrime = false;
let count = 0;
for (i = min; i <= max; i++) {
    
    for (j = 2; j <= (i / 2); j++) {
        if ((i % j) == 0)
            isPrime = true;
            count++;
    }
}
if (!isPrime){
        console.log("prime numbers are" ,count);
}
