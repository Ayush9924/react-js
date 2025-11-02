let word = "1231";

// Step 1: Convert to array
let letters = word.split(''); // ['h', 'e', 'l', 'l', 'o']

// Step 2: Reverse the array
letters.reverse(); // ['o', 'l', 'l', 'e', 'h']

// Step 3: Join back into a string
let reversedWord = letters.join(''); // 'olleh'

console.log(reversedWord);
