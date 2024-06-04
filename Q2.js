//Question # 2
function timeToBuyTickets(tickets, k) {
  // Initialize a variable time to keep track of the total time taken.
  let time = 0;
  //While there are still tickets available for purchase (tickets[k] > 0):
  while (tickets[k] > 0) {
      //Iterate through each ticket in the array:
      for (let i = 0; i < tickets.length; i++) {
          //If the ticket is available (tickets[i] > 0):
          if (tickets[i] > 0) {
              //Decrement the ticket count by 1.
              tickets[i]--;
              //Increment the time counter by 1.
              time++;
              //If the ticket being processed is the target ticket (i === k) and its count becomes 0, return the current time.
              if (i === k && tickets[k] === 0) {
                  //Return the final time value.
                  return time;
              }
          }
      }
  }
  return time;
}


// Example usage:
const tickets = [2, 3, 2];
const k = 2;
console.log(timeToBuyTickets(tickets, k));  // Output: 6