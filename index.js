var declaredVariable;
const someData = 99;
const obj = {age: 33};

console.log(typeof 37 === 'number'); // number
console.log(typeof obj === 'object'); // object
console.log(typeof true === 'boolean'); // boolean
console.log(typeof 3.14 === 'number'); // number
console.log(typeof obj.name === 'undefined'); // underfined
console.log(typeof 42 === 'number'); // number
console.log(typeof "" === 'string'); // string
console.log(typeof "bla" === 'string'); // string
console.log(typeof Boolean(1) === 'boolean'); // boolean
console.log(typeof !!1 === 'boolean'); // boolean
console.log(typeof obj.age === 'number'); // number
console.log(typeof Infinity === 'number'); // number
console.log(typeof NaN === 'number'); // number
console.log(typeof (someData + " Wisen") === 'string'); // string
console.log(typeof Number("1") === 'number'); // number
console.log(typeof Number("shoe") === 'number'); // number
console.log(typeof `template literal` === 'string'); // string
console.log(typeof "1" === 'string'); // string
console.log(typeof typeof 1 === 'string'); // string
console.log(typeof false === 'boolean'); // boolean
console.log(typeof String(1) === 'string'); // string
console.log(typeof undefined === 'undefined'); // underfined
console.log(typeof { a: 1 } === 'object'); // object
console.log(typeof declaredVariable === 'undefined'); // underfined
console.log(typeof [1, 2, 4] === 'object'); // object
console.log(typeof null === 'object'); // object
console.log(typeof "John" === 'string'); // string
console.log(typeof ([] + '1') === 'string'); // string
console.log(typeof (1 + '1') === 'string'); // string
console.log(typeof (10 * '2') === 'number'); // number