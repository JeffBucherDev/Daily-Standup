/*
Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

P = take in two lists(arrays), arrays will have integers, only integers, whole integers, no other chars
R = return 1 array, in the array there will be only the unique integers from first parameter
E = arrayDiff([1,2,2,2,3],[2]) == [1,3]
P = 1. filter to check if matching
    2. return new array

*/

function arrayDiff(a, b){
    // filter -> indexof
    return a.filter(n => b.indexOf(n) == -1)
    // filter -> includes
    return a.filter(n => !b.includes(n)) //quadratic
    // filter -> set
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n)) //linear
}

console.log(arrayDiff([1,2,2,2,3],[2]), [1,3])