/**
 * Special Number (Special Numbers Series #5)
 * https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript
 *
 */

const specialNumber = n =>
  /^[0-5]+$/g.test(n.toString()) ? 'Special!!' : 'NOT!!'
