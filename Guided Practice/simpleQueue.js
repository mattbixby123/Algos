let queue = [];

// Add elements to the queue

queue.push(10);

queue.push(20);

queue.push(30);

// Remove an element from the front of the queue

let firstElement = queue.shift();

console.log(firstElement); // Output: 10

// View the first element in the queue without removing it

let frontElement = queue[0];

console.log(frontElement); // Output: 20

// Check if the queue is empty

let isEmpty = queue.length === 0;

console.log(isEmpty);