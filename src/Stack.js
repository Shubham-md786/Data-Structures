class Stack {
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

//O(1)
  push(element) {
    this.items.push(element);
  }

//O(1)
  pop() {
    return this.items.pop();
  }

//O(1)
  peek() {
    return this.items[this.items.length - 1];
  }

//O(1)
  isEmpty() {
    return this.items.length === 0;
  }

//O(1)
  size() {
    return this.items.length;
  }

//O(1)
  print() {
    console.log(this.items.toString());
  }
  
//O(1)
  get() {
    return this.items
  }
}

module.exports = Stack
