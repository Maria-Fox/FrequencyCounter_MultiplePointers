// add whatever parameters you deem necessary

// BETTER RUN TIME: Time Complexity - O(N * log(N))
// YOU CAN SORT ARRAY 
function countPairs(arr, num) {
  // sorted from least to greatest****
  arr.sort((a, b) => a - b);
  console.log(arr)

  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === num) {
      count++;
      // move pointers so you continue looping
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};

// Bc it's sorted we can check if the left/right are close to target number and adjust accordingly. If it equals the target, add, then change ponters to see if there are other values that can add up to target.

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
