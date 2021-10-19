/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

P = taking in an array and a number, minimum of 3 integers in an array, can be negative or positive or 0, only integers in the array, can have repeat integers
R = going to be an integer, going to be a positive or negative integer or 0
E = console.log(nthSmallest([3,1,2], 2), 2)
    console.log(nthSmallest([15,20,7,10,4,3], 3), 7)
    console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5), 92)
P =   1. sort the array of integers from least to greatest
      2. pull the nth integer from the sorted array
      3. return said integer

*/
/*
function nthSmallest(arr, num){
    // 1. sort the array of integers from least to greatest
    // 2. pull the nth integer from the sorted array
    // 3. return said integer
    return arr.sort((a,b) => a-b)[num -1]
    
    }
*/
    // one line
    const nthSmallest=(arr, pos) => arr.sort((a,b) => a-b)[pos -1]
    
    console.log(nthSmallest([3,1,2], 2), 2)
    console.log(nthSmallest([15,20,7,10,4,3], 3), 7)
    console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5), 92)