function myReplace(str, before, after) {
  const LOCATION = str.search(before);
  if (str.charAt(LOCATION) === str.charAt(LOCATION).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else if (str.charAt(LOCATION) === str.charAt(LOCATION).toLowerCase()) {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}
