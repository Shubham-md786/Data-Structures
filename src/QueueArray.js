class QueueArray {
  constructor(arr) {
    // Checking if argument is Array then store it or create new empty list
    if (arr) {
        if(Array.isArray(arr)) {
	    this.items = arr;
        }
	if(!Array.isArray(arr)) {
            throw new Error(`Must be in the form of Array or empty`)
	}
    } else {
        this.items = []
    }
  }

// O(1)
  enqueue(element) {
    // Adding element to first
    this.items.push(element);
  }

// O(n)
  dequeue() {
    // Removing element from last
    return this.items.shift();
  }

// O(1)
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

// O(1)
  isEmpty() {
    return this.items.length === 0;
  }

// O(1)
  size() {
    return this.items.length;
  }

// O(1)
  print() {
    console.log(this.items.toString());
  }
  
// O(1)
  get() {
    return this.items
  }
}

module.exports = QueueArray
