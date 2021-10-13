/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

P = always an array?/ Array only have positive integers / whole numbers / no strings
R = return a single number/ whole number/ rounded down always
E = getAverage([2, 2, 2, 2], 2)
    getAverage([100, 90, 80, 70, 60], 80)
    getAverage([32, 21, 14, 55, 93], 43)
P = 1. sum all numbers in the array
    2. divide by how many numbers in the array
    3. round down to nearest integer

*/
function getAverage(arr){
    let sum = arr.reduce((a,c) => a + c, 0)
    return Math.floor(sum / arr.length)
  }
  
  console.log(getAverage([2,2,2,2]), 2)
  console.log(getAverage([100,90,80,70,60]), 80)
  console.log(getAverage([32, 21, 14,55, 93]), 43)

 
 // One Line
  function getAverage(arr){
    return Math.floor(arr.reduce((a,c) => a + c, 0) / arr.length)
  }