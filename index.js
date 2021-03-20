function sortedSquaredArray(array) {
  array = array.sort((a,b) => a-b)
  let new_array = []
  for (number of array) {
    new_array.push(number * number)
  }
  return new_array;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;