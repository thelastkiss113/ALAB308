// Part One

const n1 = 15;
const n2 = 7;
const n3 = 12;
const n4 = 16;

// 1. Check if all numbers are divisible by 5
function isDivisibleBy5(number) {
  return number % 5 === 0;
}
const allDivisibleBy5 = [n1, n2, n3, n4].every(isDivisibleBy5);
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);

// 2. Check if the first number is larger than the last
const firstLargerThanLast = n1 > n4;
console.log(`Is the first number (${n1}) larger than the last (${n4})? ${firstLargerThanLast}`);

// 3. Subtract the first number from the second number
let result = n2 - n1;
console.log(`Subtracting the first number (${n1}) from the second number (${n2}) gives: ${result}`);



