// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // build a character map of the string to see how many times 
  // each char is counted
  const charMap = {}
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }
  return maxChar
};



module.exports = maxChar;
