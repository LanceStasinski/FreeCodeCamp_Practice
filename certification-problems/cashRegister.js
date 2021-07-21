function checkCashRegister(price, cash, cid) {
  let changeDue = (cash - price) * 100;
  const values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100].map(val => val * 100).reverse();
  let returnObj = {status: 'INSUFFICIENT_FUNDS', change: []}
  let changeArr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]].reverse()
  let revCid = cid.reverse().map(val => parseFloat((val[1] * 100).toFixed(2)))
  let sumInRegister = revCid.reduce((a, b) => a + b)

  if (sumInRegister === changeDue) {
    returnObj.status = 'CLOSED';
    returnObj.change = cid.reverse();
    return returnObj;
  }

  for(let i = 0; i < revCid.length; i++) {
    while(revCid[i] > 0) {
      if(changeDue - values[i] >= 0) {
        changeDue -= values[i];
        changeArr[i][1] += values[i];
        revCid[i] -= values[i]
      } else break;
    }
    if (changeDue === 0) break;
  }

  if (changeDue !== 0) return returnObj;

  returnObj.status = 'OPEN';
  for (let i = 0; i < changeArr.length; i++) {
    changeArr[i][1] = changeArr[i][1]/100;
  }
  returnObj.change = changeArr.filter(val => val[1] !== 0)

  return returnObj;
}
