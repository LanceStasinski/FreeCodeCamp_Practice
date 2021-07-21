function checkCashRegister(price, cash, cid) {
  let moneyInRegister = {};
  let moneyToGive = {};
  let cidSum = [];

  cid.forEach(val => {
    let key = val[0];
    let value = val[1];
    cidSum.push(value)
    moneyInRegister[key] = value;
  })

  Object.assign(moneyToGive, moneyInRegister)
  for (key in moneyToGive) {
    if (moneyToGive.hasOwnProperty(key)) {
      moneyToGive[key] = 0;
    }
  }

  moneyInRegister.sum = parseFloat(cidSum.reduce((a, b) => a + b, 0).toFixed(2));
  moneyInRegister.changeDue = parseFloat((cash - price).toFixed(2));

  moneyInRegister.giveHundred = function() {
    this['ONE HUNDRED'] = parseFloat((this['ONE HUNDRED'] - 100).toFixed(2));
    this.sum = parseFloat((this.sum - 100).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 100).toFixed(2));
    moneyToGive['ONE HUNDRED'] = parseFloat((moneyToGive['ONE HUNDRED'] + 100).toFixed(2));
  }
  moneyInRegister.giveTwenty = function () {
   this.TWENTY = parseFloat((this.TWENTY - 20).toFixed(2));
   this.sum = parseFloat((this.sum - 20).toFixed(2));
   this.changeDue = parseFloat((this.changeDue - 20).toFixed(2));
   moneyToGive.TWENTY = parseFloat((moneyToGive.TWENTY + 20).toFixed(2));
  }
  moneyInRegister.giveTen = function () {
    this.TEN = parseFloat((this.TEN - 10).toFixed(2));
    this.sum = parseFloat((this.sum - 10).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 10).toFixed(2));
    moneyToGive.TEN = parseFloat((moneyToGive.TEN + 10).toFixed(2));
  }
  moneyInRegister.giveFive = function () {
    this.FIVE = parseFloat((this.FIVE - 5).toFixed(2));
    this.sum = parseFloat((this.sum - 5).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 5).toFixed(2));
    moneyToGive.FIVE = parseFloat((moneyToGive.FIVE + 5).toFixed(2));
  }
  moneyInRegister.giveOne = function () {
    this.ONE = parseFloat((this.ONE - 1).toFixed(2));
    this.sum = parseFloat((this.sum - 1).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 1).toFixed(2));
    moneyToGive = parseFloat((moneyToGive.ONE + 1).toFixed(2));
  }
  moneyInRegister.giveQuater = function () {
    this.QUARTER = parseFloat((this.QUARTER - 0.25).toFixed(2));
    this.sum = parseFloat((this.sum - 0.25).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 0.25).toFixed(2));
    moneyToGive = parseFloat((moneyToGive.QUARTER + 0.25).toFixed(2));
  }
  moneyInRegister.giveDime = function () {
    this.DIME = parseFloat((this.DIME - 0.10).toFixed(2));
    this.sum = parseFloat((this.sum - 0.10).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 0.10).toFixed(2));
    moneyToGive.DIME = parseFloat((moneyToGive.DIME + 0.10).toFixed(2));
  }
  moneyInRegister.giveNickel = function () {
    this.NICKEL = parseFloat((this.NICKEL - 0.05).toFixed(2));
    this.sum = parseFloat((this.sum - 0.05).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 0.05).toFixed(2));
    moneyToGive.NICKEL = parseFloat((moneyToGive.NICKEL + 0.05).toFixed(2));
  }
  moneyInRegister.givePenny = function () {
    this.PENNY = parseFloat((this.PENNY - 0.01).toFixed(2));
    this.sum = parseFloat((this.sum - 0.01).toFixed(2));
    this.changeDue = parseFloat((this.changeDue - 0.01).toFixed(2));
    moneyToGive.PENNY = parseFloat((moneyToGive.PENNY + 0.01).toFixed(2));
  }
  moneyInRegister.giveMoney = function () {
    while(this.sum >= 0 || this.changeDue >= 0) {
      let fun = this.changeDue >= 100 && this['ONE HUNDRED'] >= 100 ? this.giveHundred
      : this['ONE HUNDRED'] < 100 && this.changeDue >= 20 && this.TWENTY >= 20 ? this.giveTwenty
      : this.TWENTY < 20 && this.changeDue >= 10 && this.TEN >= 10 ? this.giveTen
      : this.TEN < 10 && this.changeDue >= 5 && this.FIVE >= 5 ? this.giveFive
      : this.FIVE < 5 && this.changeDue >= 1 && this.ONE >= 1 ? this.giveOne
      : this.ONE < 1 && this.changeDue >= 0.25 && this.QUARTER >= 0.25 ? this.giveQuater
      : this.QUARTER < 0.25 && this.changeDue >= 0.10 && this.DIME >= 0.10 ? this.giveDime
      : this.DIME < 0.10 && this.changeDue >= 0.05 && this.NICKEL >= 0.5 ? this.giveNickel
      : this.NICKEL < 0.05 && this.changeDue >= 0.01 && this.PENNY >= 0.01 ? this.givePenny
      : this.changeDue === 0 && this.sum > 0 ? this.open
      : this.insufficient;
      return fun();
    }
  }
  moneyInRegister.closed = function () {
    return {status: 'CLOSED', change: cid}
  }
  moneyInRegister.open = function () {
    return {status: 'OPEN', change: Object.entries(moneyToGive)}
  }
  moneyInRegister.insufficient = function() {
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }

  if (moneyInRegister.sum === moneyInRegister.changeDue) {
    return moneyInRegister.closed();
  } else {
    return moneyInRegister.giveMoney();
  }
}
