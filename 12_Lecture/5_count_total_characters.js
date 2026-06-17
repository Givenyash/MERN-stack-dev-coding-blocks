//Q.5 Find total characters in all strings.

const words = ["Hello", "world", "javaScript"];

const total = words
.reduce((sum,words) => sum += words.length,0);

console.log(total);