// Create a function that takes in a word and returns the word with the first letter capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// P = takes in a string, no more than 10 chars, only letters
// R = returns same string with capital first letter
// E = "stop" => "Stop", "howdy" => "Howdy", "orange" => "Orange"
// P = 1) target the first letter of the string
//     2) capitalize said letter
//     3) Concatenate with rest of string

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
  
  }