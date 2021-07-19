function uniteUnique(arr) {
  let finalArr = [];

  for (let i = 0; i < arguments.length; i++) {
    let argArr = arguments[i];

    for (let j = 0; j < argArr.length; i++) {
      let value = argArr[j]
      if (arr.indexOf(value) < 0) {
        finalArr.push(value)
      }
    }
  }
  return finalArr;
}