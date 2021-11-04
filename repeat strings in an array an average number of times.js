/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

P = take in an array of strings, strings consist of same letters, can be varying lengths, only letters in strings
R = return array of strings that all strings are same length as average of input array, use math.round for non whole integers, all strings will be equal length, all strings will contain the same letters as original array
E =
P = 1. store original array lenght into a variable
    2. find total amount of letters in array and divide it by length -> math.round
    3. make all strings have average length in array - repeat

*/

function findAverageLength(arr){
    let average = Math.round(arr.join('').length / arr.length)
    return arr.map(el => el[0].repeat(average))
    }
    
    console.log(findAverageLength(['u', 'y']), ['u', 'y'])
    console.log(findAverageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
    console.log(findAverageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])