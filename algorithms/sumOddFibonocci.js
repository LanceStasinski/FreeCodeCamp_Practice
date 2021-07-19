function sumFibs(num) {

  if (num <= 0) return 0;

  const FIB_ARR = [1,1];
  let nextNum = 0;

  while((nextNum = FIB_ARR[0] + FIB_ARR[1]) <= num) {
    FIB_ARR.unshift(nextNum)
  }

  return FIB_ARR.filter(val => val % 2 !== 0).reduce((a, b) => a + b)
}