/**
 * GCD sum
 * https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript
 *
 */

const solve = (s, g) => (s % g ? -1 : [g, s - g])
