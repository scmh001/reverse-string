function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log("Expecting: 'ih'");
console.log(reverseString('hi'));

console.log("");

console.log("Expecting: 'ybabtac'");
console.log(reverseString('catbaby'));

console.log("");

console.log("Expecting: 'a'");
console.log(reverseString('a'));

console.log("");

console.log("Expecting: '' (empty string)");
console.log(reverseString(''));


module.exports = reverseString;

// Please add your pseudocode to this file 
/*
* // Initialize an empty string variable to hold the reversed string
* 
* // Iterate through the input string in reverse order
*    // Append the current character to the 'reversed' string
* 
* // Return the reversed string
*/

// And a written explanation of your solution
/*
 * By iterating through the input string in reverse order, each character encountered
 * is appended to a new result string initialized as empty (""). For instance, given
 * the input string "ab", the process starts with the last character 'b', appending it
 * to the result to form "b". Subsequently, it proceeds to 'a', appending it next to
 * yield the final result "ba".
 */