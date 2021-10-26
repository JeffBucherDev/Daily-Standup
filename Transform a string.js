/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

P = taking in a string, string will have only letters and spaces, multiple words, upper/lower case letters
R = return a string in reverse of original string, with opposite case of original string
E = console.log(reverseString("Example Input"), "iNPUT eXAMPLE")
P = 1. split, reverse, join
    2. use map to change lowercase to upper and vice versa
    3. return join of step 2  



*/

function reverseString(str){
    return str.split(' ').reverse().join(' ')
              .split('')
              .map(c => c.toUpperCase() == c ? c.toLowerCase() : c.toUpperCase())
              .join('')
  }
  
  console.log(reverseString("Example Input"), "iNPUT eXAMPLE")