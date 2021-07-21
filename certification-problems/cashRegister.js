function checkCashRegister(price, cash, cid) {
  let changeDue = (cash - price) * 100;
  const values = [0.01, 0.05, 0.10, 0.25, 1, 5, 20, 100].map(val => val * 100).reverse();
  let returnObj = {status: 'INSUFFICIENT_FUNDS', change: []}
  let changeArr = ['PENNY']
  let revCid = cid.reverse()

  for(let i = 1; i < revCid.length; i++) {
    while(changeDue > revCid[i] * 100) {

    }
  }
}
