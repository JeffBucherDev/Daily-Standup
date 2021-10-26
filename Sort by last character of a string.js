/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

P = string of letters/words, only alphabet characters, 
R = return an array alphabatized by the last character of every word, any duplicate letter words will be returned in the order they appeared in the string
E = console.log(sortByLastCharacter('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
    console.log(sortByLastCharacter('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
    console.log(sortByLastCharacter('take me to semynak'), ['take', 'me', 'semynak', 'to']) 
P = 1. split string into array
    2. sort array by last character
    3. make sure duplicate last letter words are returned in the orignal place of the string
    4. return array

*/

function sortByLastCharacter(str){ 
    return str.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  }
  
   console.log(sortByLastCharacter('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
   console.log(sortByLastCharacter('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
   console.log(sortByLastCharacter('take me to semynak'), ['take', 'me', 'semynak', 'to']) 