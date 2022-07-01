class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

// O(1)
  enqueue(element) {
    // Adding element with rear index in items and increasing rear
    this.items[this.rear] = element;
    this.rear++;
  }

// O(1)
  dequeue() {
    const item = this.items[this.front];
    // Deleting item from object with index front
    delete this.items[this.front];
    this.front++;
    // returning the item value
    return item;
  }

// O(1)
  peek() {
    return this.items[this.front];
  }

// O(1)
  size() {
    return this.rear - this.front;
  }

// O(1)
  isEmpty() {
    return this.rear - this.front === 0;
  }

// O(1)
  print() {
    console.log(this.items);
  }
  
// O(1)
  get() {
    return this.items
  }
}

module.exports = Queue
