/*

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"


P = taking in a string, string has multiple words in it, multiple instances of the same word in a row, only words, any empty strings?
R = return a string, that has only single entry words in it. 
E = console.log(removeConsecDupes("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")
P =   1. Turn string into array split(" ")
      2. use filter to remove consecutive dupes using [0] !== [1]
      3. turn array back into string using join and return it
*/

function removeConsecDupes(str){
    // split -> filter -> join
    return str.split(' ').filter((w, i, a) => w != a[i + 1]).join(' ')
  }
  
  
  console.log(removeConsecDupes("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")