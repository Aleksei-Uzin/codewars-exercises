/**
 * Is Integer Array?
 * https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript
 *
 */

const isIntArray = arr => (arr ? arr.every(Number.isInteger) : false)
