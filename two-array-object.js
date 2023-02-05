// add whatever parameters you deem necessary

function twoArrayObject(arr1, arr2) {
  if (arr1.length == 0 || arr2.length == 0) {
    return null;
  }
  let obj = {};
  // Using the forEach method. assign obj[Key] to values[index] OR assign null if there's no value
  arr1.forEach((k, i) => { obj[k] = arr2[i] || null })
  return obj;
}

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

