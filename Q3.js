// Question #3:
function heightChecker(heights) {
  // Create a sorted version of the heights array
  const sortedHeights = [...heights].sort((a, b) => a - b);
  let count = 0;

  // Compare the sorted heights with the original heights
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedHeights[i]) {
          count++;
      }
  }

  return count;
}

// Example usage:
const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));  // Output: 3