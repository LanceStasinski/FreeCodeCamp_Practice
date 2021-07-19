function fearNotLetter(str) {
  for(let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      let charCode = str.charCodeAt(i) - 1;
      return String.fromCharCode(charCode)
    }
  }
}