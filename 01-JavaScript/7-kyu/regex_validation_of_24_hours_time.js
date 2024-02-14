/**
 * regex validation of 24 hours time.
 * https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript
 *
 */

const validateTime = time => /^([01]?\d|2[0-3]):[0-5]\d/.test(time)
