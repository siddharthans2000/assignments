/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let data=str.toLowerCase().split(" ")
  let result=[]
  for (let i=0;i<data.length;i++){
    let word=data[i]
    let s=""
    for (let j=0;j<word.length;j++){
      if(word[j]>='a' && word[j]<='z'){
        s+=word[j]
      }
    }
    result.push(s)
  }
  let val=result.join("")
  let lav=val.split("").reverse().join("")
  return val==lav
}
module.exports = isPalindrome;
