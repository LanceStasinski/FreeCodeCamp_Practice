function repeatStringNumTimes(str, num) {
  let largeStr = ''

  while(num > 0) {
    largeStr += str;
    num--;
  }
  return largeStr;
}

