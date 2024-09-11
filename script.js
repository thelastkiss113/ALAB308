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


// 4. Multiply the result by the third number
result *= n3;
console.log(`Multiplying the result (${result / n3}) by the third number (${n3}) gives: ${result}`);

// 5. Find the remainder of dividing the result by the fourth number
result %= n4;
console.log(`The remainder of dividing the result (${result + n4}) by the fourth number (${n4}) is: ${result}`);

// 6. Change the way isOver25 calculates (remove ! bang operator)
const BelowOrEqual25 = [n1, n2, n3, n4].every(num => num <= 25);
console.log(`Are all numbers less than or equal to 25? ${BelowOrEqual25}`);



//Part Two: 

const distance = 1500; //  miles
const fuelPrice = 3; // per gallon
const budget = 175; // $ dollars

const fuel55 = 30; // at 55 mph
const fuel60 = 28; // at 60 mph
const fuel75 = 23; // at 75 mph

calculateTripDetails(55, fuel55);
calculateTripDetails(60, fuel60);
calculateTripDetails(75, fuel75);

function calculateTripDetails(speed, efficiency) {
    const fuelNeeded = distance / efficiency; // Gallons
    const fuelCost = fuelNeeded * fuelPrice; // Total cost 
    const time = distance / speed; // time in hours
    const canAfford = budget >= fuelCost;
    
    console.log(`At ${speed} mph, you'll need ${fuelNeeded.toFixed(2)} gallons of fuel.`);
    console.log(`Fuel cost = $${fuelCost.toFixed(2)}.`);
    console.log(`Will your budget cover the trip? ${canAfford ? "Yes" : "No"}`);
    console.log(`How Long will it take? Time = ${time.toFixed(2)} hours.`);
    console.log('---');
}


// Part 3:

