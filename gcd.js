// Write a function to find the greatest common divisor of two numbers
function greatestCommonDivisor (a, b) {
  let divisor = 2
  let greatestDivisor = 1

  if (a < 0) a = -a
  if (b < 0) b = -b

  if (a < 2 || b < 2) {
    return 1
  }

  while  (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor
    }
    divisor++
  }
  return greatestDivisor
}

console.log(greatestCommonDivisor(14, 21))

// This is a recursive solution using the Euclidean algorithm
function euclidGCD (a, b) {
  if (b === 0) {
    return a
  }
  else {
    return euclidGCD(b, a % b)
  }
}

console.log(euclidGCD(14, 21))
