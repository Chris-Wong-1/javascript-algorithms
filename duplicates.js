// Write a function to remove duplicates from an array
function removeDuplicates (array) {
  let exists = {}
  let uniqueArr = []
  for (let i = 0; i < array.length; i++) {
    let el = array[i]
    if (!exists[el]) {
      uniqueArr.push(el)
      exists[el] = true
    }
  }
  return uniqueArr
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
