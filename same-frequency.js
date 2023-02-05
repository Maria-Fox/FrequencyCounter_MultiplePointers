// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  // If the lengths are off return false
  if (int1.toString().length != int2.toString().length) return false;

  // convert the integers into strings to loop thru
  int1 = int1.toString()
  int2 = int2.toString()
  console.log(int1, int2)

  // Ccreate freq counter objects
  let int1Frequency = {};
  let int2Frequency = {};

  // Loop thru the ints and get frequencies for each number
  for (let num of int1) {
    if (int1Frequency[num]) {
      int1Frequency[num] += 1;
    } else {
      int1Frequency[num] = 1;
    }
  };

  for (let num of int2) {
    if (int2Frequency[num]) {
      int2Frequency[num] += 1;
    } else {
      int2Frequency[num] = 1;
    }
  };

  console.log(int1Frequency, int2Frequency)

  for (let key in int1Frequency) {
    // ways it would fail
    // if there's no mutual key for value
    if (!int2Frequency[key]) return false;
    // if the key does exist but the values/ freq don't match
    if (int2Frequency[key] !== int1Frequency[key]) return false;
  };

  // Otherwise, all the keys have the same frequencies.
  return true;
};


// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.