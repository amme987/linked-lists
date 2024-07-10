// This file is for testing purposes
import { LinkedList } from './linkedList.js';

let test = new LinkedList();
test.append('why');
// console.log(test);

test.prepend('what');
// console.log(test.head());
test.append('how');
test.prepend('first');
test.append('last');
// console.log(JSON.stringify(test));
// console.log(test.toString());
console.log(test.toString());
// test.toString();
