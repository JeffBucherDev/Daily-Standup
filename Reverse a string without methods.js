// Reversing a string
// Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'

function solution(str){
  return str.split("").reverse().join("")
}



// without methods

function solution(str){
    let o = '';
    for (let i = str.length - 1; i >= 0; i--)
      o += str[i];
    return o;
  }  