// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Idx = 0;
  let str2Idx = 0;
  // If there's nothing to compare
  if (!str1) return true;

  // Loop through the full phrase/ full sequence
  while (str2Idx < str2.length) {
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx += 1;
    };

    // IF we've looped through the full length of subSequence return true. All items checked
    if (str1Idx === str1.length) return true;

    // otherwise, go up to the next str2 index
    str2Idx += 1;
  };

  // if we went thru the full str2 and didn't return true there is not a subSequence in str2 of str1.
  return false;
}

// function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.