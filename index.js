// This file is for listing purposes
import { LinkedList } from './linkedList.js';

let list = new LinkedList();

list.append('one'); // one -> null
list.prepend(2); // 2 -> one -> null
list.append('last'); // 2 -> one -> last -> null
list.prepend('first'); // first -> 2 -> one -> last -> null

console.log(list.size()); // 4
console.log(list.head()); // first
console.log(list.tail()); // last
console.log(list.toString()); // first -> 2 -> one -> last -> null

console.log(list.contains('last')); // true
console.log(list.contains('gray')); //false

console.log(list.find(2)); // 1
console.log(list.find('last')); //3

list.pop();
console.log(list.toString()); // first -> 2 -> one -> null

list.pop();
console.log(list.toString()); // first -> 2 -> null

list.pop();
console.log(list.toString()); // first -> null

list.pop();
// console.log(list);
console.log(list.toString()); // null
// list.toString();
