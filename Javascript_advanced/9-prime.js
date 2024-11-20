// function to check if input is prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function countPrimeNumbers(upperLimit = 100) {
  let numPrimeNumbers = 0;

  for (let i = 2; i <= upperLimit; i++) {
    if (isPrime(i)) {
      numPrimeNumbers++
    }
  }

  return numPrimeNumbers;
}

const startTime = performance.now();

countPrimeNumbers();

const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
