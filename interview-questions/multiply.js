// Write a function that multiplies two numbers without using the multiplication operator

function multiply(a, b, neg = false) {
	// Use this parameter to determine wether or not the final product with be negative or not
	// This will also be used in recursive calls to the multiply function, allowing the absolute values of the inputs to be used
	let negative = neg
	if (a < 0 || b < 0) { negative = true }
	if (a < 0 && b < 0) { negative = false }

	// Find the absolute values of the inputs
	let absA = Math.abs(a)
	let absB = Math.abs(b)

	// If one input is significantly greater than the other the function can be optimized to add the larger input to itself fewer times
	// If one is greater than the other, recursively call the multiply function with the inputs swapped
	// eg. multiply(1, 100, neg) -> multiply(100, 1, neg)
	if (absA < absB) {
		return multiply(absB, absA, negative)
	}

	// If either a or b are 0, return 0
	if (absA === 0 || absB === 0) { return 0 }

	// Calculate the product by adding absA to itself absB number of times
	let product = 0
	for (let i = 0; i < absB; i++) {
		product += absA
	}
	// Make the product negative depending on the original inputs
	if (negative) {
		return -product
	} else {
		return product
	}
}

// console.log(multiply(0, 0))
// console.log(multiply(0, -1))
// console.log(multiply(1, 1))
// console.log(multiply(1, -1))
// console.log(multiply(2, 3))
// console.log(multiply(-2, -3))
// console.log(multiply(-2, 3))
// console.log(multiply(2, -3))
// console.log(multiply(1000000000, 1))
// console.log(multiply(1, 1000000000))
// console.log(multiply(-1, 1000000000))
