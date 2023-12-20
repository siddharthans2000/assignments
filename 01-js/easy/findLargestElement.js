/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let n=numbers.length
    let ma=numbers[0]
    for (let i=0;i<n;i++){
        if(ma<=numbers[i]){
            ma=numbers[i]
        }
    }
    return ma
}

module.exports = findLargestElement;