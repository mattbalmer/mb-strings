var formatString = require('mb-strings');
require('mb-strings-sugar');

var subject = "Hello {0}!";

console.log( formatString(subject, 'World') );

console.log( subject.format('World') );