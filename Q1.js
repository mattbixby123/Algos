// Question # 1
function isValid(s) {
  // Initialize an empty stack and a mapping dictionary for matching pairs of parentheses.
  let stack = [];
  let map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  // Iterate through each character in the input string.
  for (let i = 0; i < s.length; i++) {
      // If the character is an opening parenthesis, push it onto the stack.
      if (s[i] in map) {
          stack.push(s[i]);
      } 
      // If the character is a closing parenthesis, check the top element of the stack.
      else {
          // Otherwise, pop the top element from the stack.
          let last = stack.pop();
          // If the stack is empty or the top element does not match the corresponding opening parenthesis, return false.
          if (s[i] !== map[last]) {
              return false;
          }
      }
  }
  // After iterating through all characters, check if the stack is empty. If it is, return true; otherwise, return false.
  return stack.length === 0;
}

// Example usage:
const s = "()";
console.log(isValid(s));  // Output: true