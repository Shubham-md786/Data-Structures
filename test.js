const Stack = require("./src/Stack.js");
const Queue = require("./src/Queue.js");
const QueueArray = require("./src/QueueArray.js")
const CircularQueue = require("./src/CircularQueue.js");

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
console.log(queue.get())
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.get())
queue.print();




