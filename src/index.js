module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0 || array == undefined) {
    return 0;
  }

  if (array.length == 1) {
    return 1;
  }

  array.sort((a, b) => a - b);

  let counter = 1;
  let temp = 1;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (next == (current + 1) && i !== (array.length - 1)) {
      temp++;
    } else {
      if (counter < temp) {
        counter = temp;
      }
      temp = 1;
    }
  }
  
  return counter;
}
