let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'program');

console.log(secretMessage.length);

secretMessage.indexOf('easily');
secretMessage[7] = 'right';

console.log(secretMessage.length);

secretMessage.shift();

console.log(secretMessage.length);

secretMessage.unshift('Programing');

secretMessage.splice(6,5,'know');

console.log(secretMessage.length);

console.log(secretMessage.join(' '));

