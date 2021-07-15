function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while(arr.length > 0) {
    newArray.push(arr.splice(0, size))
  }
  return newArray;
}