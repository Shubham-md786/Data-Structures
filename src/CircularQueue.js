class CircularQueue {

  constructor(capacity) {
    // Checking the Capacity argument is in Integer
    if (!Number.isInteger(capacity)) {
       throw new Error(`capacity of Circular Queue must be in Integer`)
    }
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    // Ckecking for full capacity
    if (this.isFull()) {
      throw new Error(`Circular queue is full at capacity of ${this.capacity}`)
    }
      // Setting element in last
      this.rear = (this.rear + 1) % this.capacity;
      // Storing value
      this.items[this.rear] = item;
      // Increasing current length
      this.currentLength += 1;
      // for first element
      if (this.front === -1) {
        this.front = this.rear;
      }
    
  }

  dequeue() {
    // Checking for an Empty list
    if (this.isEmpty()) {
      return null;
    }
    // Getting value of item
    const item = this.items[this.front];
    // Clearing the head or removing first element
    this.items[this.front] = null;
    // Setting up the first element
    this.front = (this.front + 1) % this.capacity;
    // Decreasing current length -1
    this.currentLength -= 1;
    // for empty list
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

module.exports = CircularQueue
