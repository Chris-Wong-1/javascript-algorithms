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
