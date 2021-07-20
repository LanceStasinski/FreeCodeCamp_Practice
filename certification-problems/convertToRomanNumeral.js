function convertToRoman(num) {
  const numArrReverse = num.toString().split('').reverse()
  let newArr = [];

  const convert = (number, one, five, ten) => {
    return number === '1' ? one
    : number === '2' ? one + one
    : number === '3' ? one + one + one
    : number === '4' ? one + five
    : number === '5' ? five
    : number === '6' ? five + one
    : number === '7' ? five + one + one
    : number === '8' ? five + one + one + one
    : number === '9' ? one + ten
    : '';
  }

  for (let i = 0; i < numArrReverse.length; i++) {
    if (i === 0) {
      newArr.push(convert(numArrReverse[i], 'I', 'V', 'X'))
    } else if (i === 1) {
      newArr.push(convert(numArrReverse[i], 'X', 'L', 'C'))
    } else if (i === 2) {
      newArr.push(convert(numArrReverse[i], 'C', 'D', 'M'))
    } else if (i === 3) {
      newArr.push(convert(numArrReverse[i], 'M', 'V', 'X'))
    }
  }

  return newArr.reverse().join('')
 }