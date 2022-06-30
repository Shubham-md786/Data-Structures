class Stack {
  constructor(arr) {
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

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
  
  get() {
    return this.items
  }
}

module.exports = Stack
