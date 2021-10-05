// Reversing a string
// Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'

//P = string
//R = reversed string
//E = console.log(reverseString('world'), 'dlrow')
//P = split / reverse / join
function reverseString(str){
  return str.split("").reverse().join("")
}



// (linear complexity) without any methods

function reverseStr(str){
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--){
      newStr += str[i]
    }
    return newStr
  }  