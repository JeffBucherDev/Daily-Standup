/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

P = take in multiple arrays (3), only numbers in arrays, positive numbers?,  whole numbers?, multiples of same #?
R = a number, a whole number only, number will = unique arrays possible using 1 number from each array, no duplicate arrays, no negative numbers returned
E = console.log(numberOfUniqueArrays([[2,6,4], [4,1,3], [2,3,1]]), 27)
    console.log(numberOfUniqueArrays([[2,6,4], [4,1,6,1,2], [2,3,1]]), 36)
    console.log(numberOfUniqueArrays([[2,6,4,2,1], [0,1,4,1,3], [2,3,1]]), 48)
P = 1. remove any duplicates from the arrays
    2. take the length of the arrays
    3. multiply the lengths together
    4. return the solution of step 3

*/

/*
function numberOfUniqueArrays(arr){
// 1. remove any duplicates from the arrays
let noRepeats = arr.map(x => [...new Set(x)])
// 2. take the length of the arrays
// 3. multiply the lengths together
let sumOfUniqueArrays = noRepeats.reduce((a,c) => a * c.length, 1)
// 4. return the solution of step 3
return sumOfUniqueArrays
}
*/

// One Line

function numberOfUniqueArrays(arr){
    // 1. remove any duplicates from the arrays
    // 2. take the length of the arrays
    // 3. multiply the lengths together
    // 4. return the solution of step 3
    return arr.map(x => [...new Set(x)]).reduce((a,c) => a * c.length, 1)
}
    
    
    
    
    console.log(numberOfUniqueArrays([[2,6,4], [4,1,3], [2,3,1]]), 27)
    console.log(numberOfUniqueArrays([[2,6,4], [4,1,6,1,2], [2,3,1]]), 36)
    console.log(numberOfUniqueArrays([[2,6,4,2,1], [0,1,4,1,3], [2,3,1]]), 48)