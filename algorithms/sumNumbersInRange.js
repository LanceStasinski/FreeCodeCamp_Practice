function sumAll(arr) {
  const NEW_ARR = arr.sort((a,b) => a -b)
  let sum = 0;
  for(let i = NEW_ARR[0]; i <= NEW_ARR[1]; i++) {
    sum = sum + i;
  }
  return sum;
}