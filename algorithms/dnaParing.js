function pairElement(str) {
  const ACID_ARR = str.split('')
  let fullArray = [];

  for (let i = 0; i < str.length; i++) {
    let pairArray = [];
    pairArray.push(ACID_ARR[i])
    const MATCH = ACID_ARR[i] === 'A' ? 'T'
    : ACID_ARR[i] === 'T' ? 'A'
    : ACID_ARR[i] === 'G' ? 'C'
    : 'G';
    pairArray.push(MATCH)
    fullArray.push(pairArray)
  }
  return fullArray;
}