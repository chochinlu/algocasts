// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str) {
  str = str.toLowerCase().replace(/\W/g, '');

  const map = {};

  for (const c of str) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  return map;
}

function anagrams(stringA, stringB) {
  const mapA = charMap(stringA);
  const mapB = charMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (const k of Object.keys(mapA)) {
    if (mapA[k] !== mapB[k]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
