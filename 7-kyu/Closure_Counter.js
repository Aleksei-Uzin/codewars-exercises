/**
 * Closure Counter
 * https://www.codewars.com/kata/60edafd71dad1800563cf933/train/javascript
 *
 */

function counter(){
  let count = 1
  
  return function() { return count++ }
}
