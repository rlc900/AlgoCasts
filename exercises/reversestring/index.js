// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  stringArray = str.split('')
  reversedArray = stringArray.reverse()
  newString = reversedArray.join('')
  return newString;
}

module.exports = reverse;
