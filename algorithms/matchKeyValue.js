function whatIsInAName(collection, source) {
  const SRC_KEY = Object.keys(source)
  return collection.filter(val => {
    for(let i = 0; i < SRC_KEY.length; i++) {
      if (!val.hasOwnProperty(srcKeys[i]) ||
      val[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  })
}