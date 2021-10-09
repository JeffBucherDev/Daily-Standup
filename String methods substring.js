/*
create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Ex.
'eloquent' => 'loquen'
'country' => 'ountr'
 
P = take in a string, no less than 2 chars, will it have any special characters or numbers? (no)
R = return the same string without hte first and last character, is not case sensitive, can have numbers or letters/chars
E = "eloquent" => "loquen", "country" => "ountr", "sleep" => "lee", "America" => "meric"
P = 

*/

function removeFirstAndLast(str){
    // 1. remove the first and character
    // 2. return the string
    return str.substring(1, str.length -1)
}
console.log(removeFirstAndLast("eloquent"), "loquen")
console.log(removeFirstAndLast("America"), "meric")
console.log(removeFirstAndLast("sleep"), "lee")
console.log(removeFirstAndLast("country"), "ountr")


// COULD ALSO USE SLICE
function removeFirstAndLast(str){
    // 1. remove the first and character
    // 2. return the string
    return str.slice(1,-1)
}