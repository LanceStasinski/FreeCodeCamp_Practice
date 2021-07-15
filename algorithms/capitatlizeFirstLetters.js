function titleCase(str) {
  const SPLIT_STR = str.toLowerCase().split(' ');
  const NEW_ARR = SPLIT_STR.map(function(subStr) {
    return subStr.replace(subStr.charAt(0), subStr.charAt(0).toUpperCase())
  })
  return NEW_ARR.join(' ');
}

//Array.prototype.map() applies function to each element of an array and returns
//an array with the results.