/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(st1, st2) {
  let str1= st1.toLowerCase();
  let str2= st2.toLowerCase();
  if(str1.length !=str2.length) {
    return false;   
  }

  const arr1= str1.split("").sort()
  const arr2= str2.split("").sort()

  for(let i=0; i<arr1.length; i++){
    if(arr1[i]!=arr2[i]){
      return false;
    }
  }
  return true;
}


module.exports = isAnagram;
