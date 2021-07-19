function binaryAgent(str) {
  const arr = str.split(' ')
  const stringArr = [];

  for(let i = 0; i < arr.length; i++) {
    stringArr.push(String.fromCharCode(parseInt(arr[i], 2)))
  }

  return stringArr.join('');
}