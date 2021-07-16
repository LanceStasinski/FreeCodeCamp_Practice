const squareList = arr => {
  return arr.filter(val => val > 0 && Number.isInteger(val))
  .map(val => val * val)
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);