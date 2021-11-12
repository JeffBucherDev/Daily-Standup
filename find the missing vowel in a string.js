/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.


*/





function absentVowel(x){
    let array = x.split("")
     if(array.includes('a') != true){
       return 0;
     }else if (array.includes('e') != true){
       return 1;
     }else if (array.includes('i') != true){
       return 2;
     }else if (array.includes('o') != true){
       return 3;
     }else {
       return 4;
     }
    }