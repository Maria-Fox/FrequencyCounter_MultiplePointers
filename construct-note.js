// add whatever parameters you deem necessary
function constructNote(msg, letters) {

  // create empty object to count each char frequency
  let msgCounter = {};
  let letterCounter = {};

  for (let char of msg) {
    // If the letter is already in the object add one
    if (msgCounter[char]) {
      msgCounter[char] += 1;
    } else {
      msgCounter[char] = 1;
    }
  }

  // Both return something like: {'y': 4, 'e': 1, 's':1}

  for (let char of letters) {
    // If the letter is already in the object add one
    if (letterCounter[char]) {
      letterCounter[char] += 1;
    } else {
      // otherwise, create a key value pair 
      letterCounter[char] = 1;
    }
  }

  // loops through keys in msgCounter
  for (let char in msgCounter) {
    // If the same key doesn't exist in letterCounter
    if (!letterCounter[char]) {
      return false;
    }

    // If the key IS there, but the frequency in msgs for that letter is HIGHER than the letters submitted- return false
    if (msgCounter[char] > letterCounter[char]) {
      return false;
    }
  }


  // if all other tests passed return true
  return true;

}


// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.