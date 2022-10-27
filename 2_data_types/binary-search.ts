function binarySearch(number: number, array: number[]) {
  let l = 0;
  let r = array.length;

  while (l <= r) {
    const middleIndex = Math.floor((l + r) / 2);
    const middleNumber = array[middleIndex];

    if (number === middleNumber) {
      console.log(middleIndex);
      return middleIndex;
    } else if (number < middleNumber) {
      r = middleIndex - 1;
    } else if (number > middleNumber) {
      l = middleIndex + 1;
    }
  }

  return -1;
}

binarySearch(98, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98]);
