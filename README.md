## Algorithm References

Question 1
Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions:

The opening brackets:

- Must match with the corresponding closing brackets of the same type

- Must be closed in the correct order

- Should have a corresponding opening bracket of the same type

Example:

Input: s = "()"
Output: true

---

Question 2
There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back.

You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase.

Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line.

Return the time spent for the individual at position k (0-indexed) to finish buying tickets.

Example:

Input: tickets = [2,3,2], k = 2
Output: 6

---

Question 3
You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.

You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

Example:

Input: heights = [1,1,4,2,1,3]
Output: 3

---
