// Write a function to merge two sorted arrays
function mergeSortedArray (a, b) {
  var merged = []
  let aElm = a[0]
  let bElm = b[0]
  let i = 1
  let j = 1

  if (a.length === 0) {
    return b
  }
  if (b.length === 0) {
    return a
  }

  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm)
      aElm = a[i++]
    }
    else {
      merged.push(bElm)
      bElm = b[j++]
    }
  }
  return merged
}

console.log(mergeSortedArray([2, 4, 6, 8], [1, 3, 5, 7, 9]))
