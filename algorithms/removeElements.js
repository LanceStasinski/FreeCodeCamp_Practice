const destroyer = (arr, ...valsToRemove) =>  arr.filter(val => !valsToRemove.includes(val))
