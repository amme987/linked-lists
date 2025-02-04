import { Node } from './node.js';

export class LinkedList {
  constructor() {
    this.firstNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value);
    } else {
      let temp = this.firstNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let temp = new Node(value);
    temp.nextNode = this.firstNode;
    this.firstNode = temp;
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let temp = this.firstNode;

    while (temp) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }

  // returns the first node in the list
  head() {
    if (this.firstNode !== null) {
      return this.firstNode.value;
    }
    return null;
  }

  // returns the last node in the list
  tail() {
    if (this.firstNode === null) {
      return null;
    } else {
      let temp = this.firstNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      return temp.value;
    }
  }

  // returns the node at the given index
  at(index) {
    if (index < 0 || index >= this.size()) {
      return undefined;
    } else if (index === 0 && this.firstNode === null) {
      return null;
    } else {
      let count = 0;
      let temp = this.firstNode;
      while (count !== index) {
        temp = temp.nextNode;
        count++;
      }
      return temp.value;
    }
  }

  // removes the last element from the list
  pop() {
    let temp = this.firstNode;
    if (temp === null || temp.nextNode === null) {
      this.firstNode = null;
    } else {
      while (temp.nextNode.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = null;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let temp = this.firstNode;
    while (temp !== null && temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
    }
    return false;
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    let count = 0;
    let temp = this.firstNode;
    while (temp !== null && temp) {
      if (temp.value === value) {
        return count;
      }
      temp = temp.nextNode;
      count++;
    }
    return null;
  }

  // that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (this.firstNode === null || index <= 0) {
      this.prepend(value);
    } else {
      let count = 0;
      let prev;
      let temp = this.firstNode;
      let newNode = new Node(value);
      while (count !== index && temp !== null) {
        prev = temp;
        temp = temp.nextNode;
        count++;
      }
      prev.nextNode = newNode;
      newNode.nextNode = temp;
    }
  }

  //  that removes the node at the given index.
  removeAt(index) {
    let temp = this.firstNode;
    if (this.firstNode === null || this.size() === 1) {
      this.firstNode = null;
    } else if (index === 0) {
      this.firstNode = temp.nextNode;
    } else if (index < 0 || index >= this.size) {
    } // do nothing
    else {
      let count = 0;
      let prev;
      while (count !== index) {
        prev = temp;
        temp = temp.nextNode;
        count++;
      }
      prev.nextNode = temp.nextNode;
    }
  }

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: (value) -> (value) -> (value) -> null
  toString() {
    let arr = [];
    let temp = this.firstNode;
    while (temp) {
      arr.push(temp.value);
      temp = temp.nextNode;
    }
    arr.push('null');
    return arr.join(' -> ');
  }
}
