const Stack = require("./src/Stack.js");
const Queue = require("./src/Queue.js");
const CircularQueue = require("./src/CircularQueue.js");

const stack = new Stack()
//stack.print()
stack.push(9)
stack.push('hello')
console.log(stack.get())
console.log(stack.pop())
console.log(stack.get())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())

module.exports = {
    Stack ,
    Queue ,
    CircularQueue
}

