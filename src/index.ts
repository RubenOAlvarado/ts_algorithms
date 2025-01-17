import { reverseInt } from './reverse-integer';
import { reverse } from './reverse-string';
console.log('Hello, world!');
const testValues = ['apple', 'hello', 'Greetings!'];
console.log('Reversed values:');
testValues.forEach(value => {
    console.log(reverse(value));
});
console.log('Goodbye, world!');
console.log('Hello, world!');
const testValuesInt = [15, 981, 500, -15, -90];
console.log('Reversed values:');
testValuesInt.forEach(value => {
    console.log(reverseInt(value));
});
console.log('Goodbye, world!');