/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces 

P = take in an array of strings with duplicate repeating letters, will there be anything other than strings?, any empty arrays?
R = return an array of strings with repeating duplicate letters removed, 
E = ["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
    ["kelless","keenness"]) = ["keles","kenes"]
P = 1. map through array
    2. split for chars, filter for duplicates in the split array, join
    3.

*/
function removeDupeChars(arr){
    return arr.map(el => el.split("").filter((c,i,a) => c != a[i + 1]).join(""))
  }
  
  
  console.log(removeDupeChars(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"])