// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charNum = {};

  for (const c of str) {
    charNum[c] = charNum[c] ? charNum[c] + 1 : 1;
  }

  const keys = Object.keys(charNum);
  let maxChar = keys[0];
  let maxNum = charNum[maxChar];

  for (const k of keys) {
    if (charNum[k] > maxNum) {
      maxChar = k;
      maxNum = charNum[k];
    }
  }

  return maxChar;
}

module.exports = maxChar;
