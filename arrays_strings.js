// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique (string) {
  let currentLetter = ''
  for (let i = 0; i < string.length; i++) {
    currentLetter = string[i]
    for (let j = 0; j < string.length; j++) {
      if (currentLetter === string[j] && i != j) {
        return false
      }
    }
  }
  return true
}

// console.log(isUnique("cat"))
// console.log(isUnique("mom"))

// # 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation (str1, str2) {
  // Convert the strings into sorted arrays
  let arr1 = str1.split('').sort()
  let arr2 = str2.split('').sort()
  // Check for edge cases
  if (arr1 === arr2) return true
  if (arr1 == null || arr2 == null) return false
  if (arr1.length != arr2.length) return false
  // Check that each element of the sorted arrays match
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false
  }
  return true
}

// console.log(isPermutation('cat', 'tac'))
// console.log(isPermutation('dog', 'cat'))

// # 1.3 URLify: Write a method to replace all spaces in a string with '%20'.
//
// def urlify(str)
//   words = str.split(' ')
//   words.join('%20')
// end
//
// p urlify("the cat in the  hat  ")
