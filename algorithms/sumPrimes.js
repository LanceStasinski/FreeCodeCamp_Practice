function sumPrimes(num) {
  if (num <= 0) return 0;

  const NUM_SEQ = []

  for (let i = 2; i <= num; i++) {
    NUM_SEQ.push(i)
  }

  return NUM_SEQ.filter(val => {
    for(let j = 2; j <= Math.sqrt(val); j++) {
        if (val % j === 0) return false;
    }
    return true;
  })
  .reduce((a,b) => a + b)
}
