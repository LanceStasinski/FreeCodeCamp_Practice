function palindrome(str) {
  const onlyLetters = str.replaceAll(/[^a-zA-Z0-9]/g, '')
  const lowerCase = onlyLetters.toLowerCase();
  const reverse = lowerCase.split('').reverse().join('')

  if (reverse === lowerCase) return true;

  return false;

}