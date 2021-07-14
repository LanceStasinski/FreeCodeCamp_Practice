function findLongestWordLength(str) {
  const STRING_ARR = str.split(' ');
  let longest = '';

  for (let i = 0; i < STRING_ARR.length; i++) {
    if (STRING_ARR[i].length > longest.length) {
      longest = STRING_ARR[i];
    }
  }
  return longest.length;
}

