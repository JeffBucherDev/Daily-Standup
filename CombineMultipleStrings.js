
//Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

//E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

//Note: You can expect all of the inputs to be the same length.

//P a  grouping of 3 strings / all the same length 
//R a new string with the first letter of each input string 
//E (aa, bb, cc = "abcabc")
//P 
//  create new string for the return
//  loop through the strings
//  add the index of each string
// return the new string

function combineMultipleStrings(s1, s2, s3){
  let newStr = ''
  for (let i = 0; i < s1.length; i++) {
    newStr += s1[i] + s2[i] + s3[i]
  }
  return newStr
}

combineMultipleStrings("aa", "bb", "cc")