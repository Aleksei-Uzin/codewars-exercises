/**
 * Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
 * https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript
 *
 */

const findAdmin = (list, lang) => list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes')
