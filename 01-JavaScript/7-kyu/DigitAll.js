/**
 * DigitAll
 * https://www.codewars.com/kata/57eead3b5f79f6d977001fb7/train/javascript
 *
 */

const digitAll = x =>
  typeof x === 'string' ? x.replace(/\D*/g, '') : 'Invalid input !'
