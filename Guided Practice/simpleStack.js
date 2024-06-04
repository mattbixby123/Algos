// Create a new stack

const stack = new Stack();

// Push each character of the string onto the stack

const inputString = "Hello, world!";

for (let i = 0; i < inputString.length; i++) {
  stack.push(inputString[i]);
}

// Pop each character from the stack to get the reversed string

let reversedString = "";

while (!stack.isEmpty()) {
  reversedString += stack.pop();
}

console.log(reversedString);