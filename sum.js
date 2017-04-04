// Find the greatest sum of a contiguous sub array of a given array

function kadanesSum ( array ) {
  let maxEndingHere = 0
  let maxSoFar = 0

  for ( let i = 0; i < array.length; i++ ) {
    maxEndingHere = maxEndingHere + array[i]
    if ( maxEndingHere < 0 ) {
      maxEndingHere = 0
    }
    if ( maxSoFar < maxEndingHere ) {
      maxSoFar = maxEndingHere
    }
  }
  console.log(maxSoFar)
}

// let test1 = [1, 2, 3, 4]
// let test2 = [-1, 0, 8, 0, -1]
//
// kadanesSum(test1)
// kadanesSum(test2)

// Given an array of positive integers find the maximum sum of non-consecutive elements

function nonConsecutiveMaxSum ( array ) {
  let incl = 0
  let excl = 0
  let newExcl

  for ( let i = 0; i < array.length; i++ ) {
    // Current max excluding i
    newExcl = Math.max( incl, excl )

    // Current max including i
    incl = excl + array[i]
    excl = newExcl
  }
  // Return the maximum of incl and excl
  console.log( Math.max( incl, excl ) )
}

// let test3 = [1, 2, 3]
// let test4 = [5, 5, 10, 100, 10, 5]
//
// nonConsecutiveMaxSum( test3 )
// nonConsecutiveMaxSum( test4 )
