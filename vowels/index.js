// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 3
//   vowels('Why?') --> 0

function vowels(str) {
  const v = 'aeiou';
  let count = 0;

  for (const c of str.toLowerCase()) {
    if (v.includes(c)) {
      count = count + 1;
    }
  }

  return count;
}

module.exports = vowels;
