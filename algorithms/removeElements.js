function destroyer(arr) {
  let argArr = []
  for (let i = 1; i < arguments.length; i++) {
    argArr.push(arguments[i])
  }
  return arr.filter(val => !argArr.includes(val))
}