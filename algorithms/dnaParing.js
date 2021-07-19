function pairElement(str) {
  const ACID_ARR = str.split('')
  const PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  return ACID_ARR.map(val => [val, PAIRS[val]])
}