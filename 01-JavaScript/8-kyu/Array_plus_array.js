/**
 * Array plus array
 * https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
 *
 */

function arrayPlusArray(arr1, arr2) {
  const getSum = (a, b) => a + b
  const sum1 = arr1.reduce(getSum)
  const sum2 = arr2.reduce(getSum)

  return sum1 + sum2
}

// Best Practice
//
// function arrayPlusArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   return arr.reduce((a, b) => a + b);
// }
