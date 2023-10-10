'use strict'
// 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[1] < min) min = arr[i];
    sum += arr[i];
  }
  
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


//2
function summElementsWorker(...arr) {
  return arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);

}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) {
    return 0;
  }
  return sumEvenElement / countEvenElement;
}


//3
function makeWork (arrOfArr, func) {
  let maxRes = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let result = func(...arr);
    if (result > maxRes) {
      maxRes = result;
    }
  }
  return maxRes;
}







