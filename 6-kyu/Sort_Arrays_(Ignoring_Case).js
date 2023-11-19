/**
 * Sort Arrays (Ignoring Case)
 * https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/javascript
 *
 */

const sortme = names =>
  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
