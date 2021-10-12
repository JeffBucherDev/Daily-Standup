/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

P = only using numbers and strings of numbers, (any negative integers?)
R = will return an integer. / Will all returns be positive?
E 
P =
  1. convert all strings to numbers
  2. add all numbers together
  3. return sum of all numbers


*/

// function sumOfMixedElements(x){
//  let newArray = x.map(num => Number(num))
//   return newArray.reduce((a,b) => a + b)
// }

function sumOfMixedElements(x){
    return x.reduce((a,b) => a + Number(b), 0)
   }
   
   console.log(sumOfMixedElements([9, 3, '7', '3']), 22)
   console.log(sumOfMixedElements([9, 3, '5', '8']), 25)
   console.log(sumOfMixedElements([9, 3, '1', '13']), 26)
   
   
//    function sumOfMixedElements(x){
//     return x.map(num => Number(num)).reduce((a,b) => a + b)
//    }