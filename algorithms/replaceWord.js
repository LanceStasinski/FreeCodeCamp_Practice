function myReplace(str, before, after) {
  const START_CHAR = str.charAt(str.search(before))
  after = /[A-Z]/.test(START_CHAR) ? after.charAt(0).toUpperCase() + after.slice(1)
  : after = after.charAt(0).toLowerCase() + after.slice(1);

  return str.replace(before, after)
}