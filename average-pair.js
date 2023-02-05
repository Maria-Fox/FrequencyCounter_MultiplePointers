// add whatever parameters you deem necessary
// sorted array****
function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // divide by two to get average
    let avg = arr[left] + arr[right] / 2;

    if (avg == targetAvg) return true;

    if (avg < targetAvg) {
      left++
    } else {
      right--
    }
  }

  return false;

}


// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.