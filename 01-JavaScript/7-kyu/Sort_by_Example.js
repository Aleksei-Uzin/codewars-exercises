/**
 * Sort by Example
 * https://www.codewars.com/kata/5747fcfce2fab91f43000697/train/javascript
 *
 */

const exampleSort = (arr, exampleArr) =>
  arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b))
