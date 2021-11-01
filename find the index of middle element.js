/*
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

P = taking in array of numbers, will it only be numbers in the array?, will there be any negative numbers in the array?, will there be any non-whole numbers in the array?, will there only be 3 numbers in the array?
R = return the middle index of the array, will it only return the middle index of the array?, the index will only be positive return
E = console.log(findIndexOfMiddle([2, 3, 1]), 0)
    console.log(findIndexOfMiddle([5, 10, 14]), 1)
    console.log(findIndexOfMiddle([5, 1, 3]), 2)
P = 1. need to sort the input array
    2. need to find the index of the middle of the sorted array
    3. return the found index 
*/

function findIndexOfMiddle(arr){
    let sortedArray = [...arr].sort((a,b) => a-b)[1]  
    return arr.indexOf(sortedArray)
  }
  
  
  console.log(findIndexOfMiddle([2, 3, 1]), 0)
  console.log(findIndexOfMiddle([5, 10, 14]), 1)
  console.log(findIndexOfMiddle([5, 1, 3]), 2) 