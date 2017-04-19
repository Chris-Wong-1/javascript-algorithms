function findIndex(array, target) {
  return binarySearch(array, target, 0, array.length - 1)
}

function binarySearch(array, target, start, end) {
  if (start > end) { return -1 }

  var middle = Math.floor((start + end) / 2)
  var value = array[middle]

  if (value > target) {
    return binarySearch(array, target, start, middle - 1)
  }
  if (value < target) {
    return binarySearch(array, target, middle + 1, end)
  }
  return middle
}

findIndex([1, 8, 3, 6, 2, 9, 4, 7, 5], 8)
