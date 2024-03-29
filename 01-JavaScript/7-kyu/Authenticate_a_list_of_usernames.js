/**
 * Authenticate a list of usernames
 * https://www.codewars.com/kata/5819ba1e73b986d4160004f7/train/javascript
 *
 */

const authList = arr =>
  arr.every(val => /^((?=.*[a-z])(?=.*\d))[a-z\d]{6,10}$/.test(val))
