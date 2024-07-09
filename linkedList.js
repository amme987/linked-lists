import { Node } from './node.js';

class LinkedList {
  constructor() {
    this.firstNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value);
    } else {
      let tmp = this.firstNode;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let node = new Node(value);
    node.nextNode = this.head;
    // console.log(this.head);
    this.head = node.value;
    // console.log(node.nextNode);
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    while (this.value !== null) {
      this.nextNode;
      count++;
    }
    return count;
  }

  // returns the first node in the list
  head() {
    return this.firstNode;
  }

  // returns the last node in the list
  tail() {}

  // returns the node at the given index
  at(index) {}

  // removes the last element from the list
  pop() {}

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {}

  // returns the index of the node containing value, or null if not found.
  find(value) {}

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: (value) -> (value) -> (value) -> null
  toString() {}
}

let test = new LinkedList();
test.append('why');
// console.log(test);

test.append('what');
test.append('how');
console.log(JSON.stringify(test));
// console.log(test.prepend('ugh'));
