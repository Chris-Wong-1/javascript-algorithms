// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(string) {
  let currentLetter = '';
  for (var i = 0; i < string.length; i++) {
    currentLetter = string[i];
    for (var j = 0; j < string.length; j++) {
      if (currentLetter === string[j] && i != j) {
        return false;
      };
    };
  };
  return true;
}

console.log(isUnique("cat"));
console.log(isUnique("mom"));
//
// def unique_with_hash?(str)
//   chars_hash = Hash.new(0)
//   chars = str.split("")
//   chars.each do |char|
//     chars_hash[char] += 1
//   end
//   chars_hash.values.each do |value|
//     if value > 1
//       return false
//     end
//     return true
//   end
// end
//
// # 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
//
// def permutation(str1, str2)
//   str1.split('').sort == str2.split('').sort
// end
//
// # p permutation('cat', 'tac')
// # p permutation('cat', 'dog')
//
// # 1.3 URLify: Write a method to replace all spaces in a string with '%20'.
//
// def urlify(str)
//   words = str.split(' ')
//   words.join('%20')
// end
//
// p urlify("the cat in the  hat  ")
