class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

// O(1)
  prepend(value) {
    // Creating new node
    const node = new Node(value);
    // If List is Empty
    if (this.isEmpty()) {
      //Storeing value in object head
      this.head = node;
    } else {
      //Set next value
      node.next = this.head;
      //Storing in object head
      this.head = node;
    }
    // Increase the Size
    this.size++;
  }

// O(1) for new list and O(n) for old list
  append(value) {
    // Creating new node
    const node = new Node(value);
    // If list is Empty
    if (this.isEmpty()) {
      //Storeing value in object head
      this.head = node;
    } else {
      // Getting first value
      let curr = this.head;
      // Searching where next value is null
      while (curr.next) {
        curr = curr.next;
      }
      // Inserting after next value is null
      curr.next = node;
    }
    this.size++;
  }

// O(1) for 1st index and O(n) for other index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const l = new LinkedList();

console.log(l.isEmpty());
//l.append(50);
l.append(20);
l.append(100);
l.append(60)
l.append(120)
/*l.append(80);
l.insert(60, 2);
console.log(l.getSize());
l.print();
l.reverse();
l.print();
console.log(l.search(60));
l.removeFrom(4);
console.log(l.getSize());
l.print();
l.removeValue(80);
l.print();
console.log(l.getSize());
l.print();*/
