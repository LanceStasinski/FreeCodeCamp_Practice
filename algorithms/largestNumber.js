function largestNumber(arr) {
  let largestNums = [];
  for(const SUB of arr) {
    const MAX = Math.max(...SUB)
    largestNums.push(MAX);
  }
  return largestNums;
}