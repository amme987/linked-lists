// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
