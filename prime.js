function isPrime (n) {
  let divisor = 2;
  while (Math.sqrt(n) >= divisor) {
    if (n % divisor == 0) {
      return false;
    }
    else {
      divisor++;
    }
  }
  return true
};

console.log(isPrime(137));
console.log(isPrime(237));
