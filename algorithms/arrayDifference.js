function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(val => !arr1.includes(val) || !arr2.includes(val))
}