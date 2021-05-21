// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');


  let newString = ''
  for (let char of str) {
    newString = char + newString
  }
 return newString  
}

module.exports = reverse;
