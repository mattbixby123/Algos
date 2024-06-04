// Question # 4

function deckRevealedIncreasing(deck) {
  // Sort the deck in ascending order
  deck.sort((a, b) => a - b);

  // Initialize the queue with indices
  let queue = [];
  for (let i = 0; i < deck.length; i++) {
      queue.push(i);
  }

  // Create an array to store the result
  let result = new Array(deck.length);

  // Simulate the process
  for (let card of deck) {
      // Place the current card at the front index of the queue
      result[queue.shift()] = card;
      // Move the next index to the back of the queue
      if (queue.length > 0) {
          queue.push(queue.shift());
      }
  }

  return result;
}

// Example usage:
const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));  // Output: [2, 13, 3, 11, 5, 17, 7]
