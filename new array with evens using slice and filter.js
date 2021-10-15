/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

P = we ar taking in an array and a number / all arrays will have at least 1 even number / only nuymbers in the array / positive or negative numbers in array, only positive #'s for second argument
R = returns an array of even numbers / only numbers will be returned/ even nums can be positive or negative / amount of returned numbers in the array will match the 2nd argument of function
E = console.log(extractEndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
    console.log(extractEndEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
    console.log(extractEndEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])
    console.log(extractEndEvens([4, 2, 3, 21, 13, 32, 26, 1, 7, 3, 15, 22, 4, 8, 2, 1, 5, 9, 12], 6) [26, 22, 4, 8, 2, 12])
P = 1.loop through and remove all even numbers
    2.remove selected quantity from new array of even numbers
    3.return the new array of selected even numbers


*/

function extractEndEvens(arr, numOfEvenNums) {
return arr.filter(num => num % 2 === 0).slice(-numOfEvenNums)
}