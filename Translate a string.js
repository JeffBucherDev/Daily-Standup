/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

P = take in a string, string can have any characters, any number of characters, only strings will be taken in
R = return a string, only a string will be returned, string will only contain characters (), singe instances of the first string will represent '(' multiple instances represented by ')'
E = console.log(stringConverter('poop'), '))))')
    console.log(stringConverter('hola'), '((((')
    console.log(stringConverter('happy'), '(())(')
P = 1. convert string into array
    2. loop through array converting characters to corresponding translations
    3. turn array back into string
    4. return new string

*/

function stringConverter(str){
    let newArr = str.toLowerCase().split('')
    let convertedArray = newArr.map(x => {
     if (newArr.indexOf(x) == newArr.lastIndexOf(x)){
       return '('
     } else{
       return ')'
     }
   })
   return convertedArray.join('')     
   }
   
   console.log(stringConverter('poop'), '))))')
   console.log(stringConverter('hola'), '((((')
   console.log(stringConverter('happy'), '(())(')