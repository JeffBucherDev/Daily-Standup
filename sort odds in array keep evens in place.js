/*

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

P = taking in an array of integers, will there only be integers in the array?, only whole integers?, any negative integers?, any empty arrays?
R = return sorted array where even integers stay in original position, sort the odd integers in ascending order
E =
  console.log(sortOddsInArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
  console.log(sortOddsInArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

P = 1. determine if element in array is odd or even using a loop with an if statement
    2. if odd, sort it, if even keep it in it's position
    3. return the new array 
    
*/

function sortOddsInArray(arr){
    const sortedArray = arr.filter(n => n % 2 !== 0).sort((a,b) => a-b)
    return arr.map(n => n % 2 === 0 ? n : sortedArray.shift())
  }
  
  console.log(sortOddsInArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
  console.log(sortOddsInArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])