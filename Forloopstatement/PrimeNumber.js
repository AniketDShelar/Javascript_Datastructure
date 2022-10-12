const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');
let isPrime = false;

for (i = 2; i <= (NUMBER / 2); i++) {
    if ((NUMBER % i) == 0) {
        isPrime = true;
    }
}

//check number is prime or not
if (!isPrime) {
    console.log(NUMBER + " is a prime number");
}
else {
    console.log(NUMBER + " is not a prime number");
}