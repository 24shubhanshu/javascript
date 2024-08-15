const number = new Array(1,3,2,4,5,3,);
console.log(number);
const fruits=['apple','pear','cherry']
console.log(fruits);

fruits[3]='grape';
console.log(fruits[1]);

console.log(fruits);

fruits.push('banana');
console.log(fruits);

fruits.unshift('strwberry');
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('cherry'));