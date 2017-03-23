// Write a function to get the nth fibonacci number
function fibonacci (n) {
  if (n <= 1) {
    return n
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(12))

// Add basic memoization to the function to improve performance on larger numbers

var memoFibonacci = ( function () {
  const memo = {}

  function fib (n) {
    let value
    if (n in memo) {
      value = memo[n]
    } else {
      if (n <= 1) {
        value = n
      } else {
        value = fib(n - 1) + fib(n - 2)
      }
      memo[n] = value
    }
    return value
  }
  return fib
})()

console.log(memoFibonacci(40))
