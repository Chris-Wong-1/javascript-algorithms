// Write a function to verify if a number is prime
function isPrime (n) {
  let divisor = 2
  while (Math.sqrt(n) >= divisor) {
    if (n % divisor === 0) {
      return false
    }
    else {
      divisor++
    }
  }
  return true
}

console.log(isPrime(137))
console.log(isPrime(237))

// Write a function to find all prime factors of a number
function primeFactors (n) {
  const factors = []
  let divisor = 2

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor)
      n = n / divisor
    }
    else {
      divisor++
    }
  }
  return factors
}

console.log(primeFactors(69))
