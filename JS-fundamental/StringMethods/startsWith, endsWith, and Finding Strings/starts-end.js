/**
 * String.prototype.startsWith(str [,pos]) //returns Boolean
 * String.prototype.endsWith(str [,pos])   //returns Boolean
 *
 * String.prototype.includes(str [,pos])  //returns Boolean
 * String.prototype.indexOf(str [,pos])  //returns -1 or position index
 * String.prototype.lastIndexOf(str [,pos])  //returns -1 or position index
 * String.prototype.charAt(pos)  //returns the single code point at that position
 * String.prototype.match(regExp); //returns an Array of matches or null. regex.test() and regex.exec()
 */
let log = console.log;

let sentence = 'How are you today?👋🏻';
let len = sentence.length;
let regexp = /[Ho]/g;

// log(sentence.indexOf('👋🏻')); //18
// log(sentence.lastIndexOf('👋🏻')); //18
// log(sentence.includes('x')); //false
// log(sentence.match(regexp));// []  or null
// log(regexp.test(sentence)); // true
// log(sentence.charAt(0) === 'H');
// log(sentence.charAt(18));
// log(sentence.substring(18));

log(sentence.startsWith('H'));
log(sentence.startsWith('h'));
log(sentence.startsWith('👋🏻', 18));
log(sentence.endsWith('👋🏻'));