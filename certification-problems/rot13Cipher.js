function rot13(str) {
  return str
  .split('')
  .map(val => {
    if (/[A-Z]/.test(val)) {
      if (val.charCodeAt() < 78) {
      return String.fromCharCode(val.charCodeAt() + 13)
      } else if (val.charCodeAt() >= 78) {
      return String.fromCharCode(val.charCodeAt() - 13)
      }
    }
    return val;
  })
  .join('')
}
