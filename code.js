// 1. sum zero Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addtoZero (arr) {   
    for(i = 0; i<arr.length; i++) {
        for (j=i+1; j<arr.length; j++) {
            if ((arr[i] + arr[j]) === 0){
            return true;
            }
            }
        } return false;
}
console.log(addtoZero([1,2,3,4,5,-3]))
//extra credit space complexity: run:O(n^2) space:O(1)


// 2) Unique Characters

function uniChars (str) {
    for (i = 0; i <str.length-1; i++) {
        for (j=i+1; j<str.length; j++){
            if (str[i] == str[j]) return false;
            }
        }
        return true;
    }

console.log(uniChars('Hellooo'))
//extra credit space complexity: run:O(n) space:O(1)


// 3) Pangram Sentence

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase()
    for (let chars of "abcdefghijklmnopqrstuvwxyz"){
      if (lowerCased.indexOf(chars) === -1){
        return false
      }
    }
    return true
  }
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram("I like cats, but not mice"))
//extra credit space complexity: run:O(n) space:O(1)


// 4) Longest Word

function findLongestWord (wordArray) {
    let longestWord = 0
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i].length >longestWord) {
            longestWord = wordArray[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(['beautiful', 'happy', 'fantastic', 'motivation']))
//extra credit space complexity: run:O(n) space:O(1)