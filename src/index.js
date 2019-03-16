module.exports = function getZerosCount(number, base) {
  let baseDividers = [];
  let zeroCount = 0;
  for (let i = 2; i <= base; i++) {
    if (base % i == 0) {
      baseDividers[i] = 1;
      base /= i;
      while (base % i == 0) {
        baseDividers[i]++
        base /= i;
      }
    }
  }
  let maxValue = 0;
  let maxIndex = baseDividers.length - 1;
  let n;
  for (let i = baseDividers.length - 1; i > 1; i--) {
    if (baseDividers[i] > 1 && i < baseDividers.length - 1) {n = baseDividers[i] / 2;
    } else n = baseDividers[i]
    if (Math.pow(i, n) > maxValue) {
      maxValue = Math.pow(i, n);
      maxIndex = i;
    }
  }

let numberDividers = 0;
let tmpNum = number;
let tmpNumDiv = 0;
    while (number > 1) { 
      number = Math.floor(number / maxIndex);
      numberDividers += number;
    }
    if (maxIndex !== baseDividers.length) {
      while (tmpNum > 1) { 
        tmpNum = Math.floor(tmpNum / maxIndex);
        tmpNumDiv += tmpNum;
    }
  }
zeroCount = Math.min(Math.floor(numberDividers / baseDividers[maxIndex]), Math.floor(tmpNumDiv / baseDividers[maxIndex]));
  return zeroCount;
}