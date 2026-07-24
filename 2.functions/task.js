function getArrayParams(...arr) {

  if (arr.length === 0) {
    return null; // или можно выбросить ошибку
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > max) max = current;
    if (current < min) min = current;

    sum += current;
  }

  const avg = sum / arr.length;
  const roundedAvg = Number(avg.toFixed(2)); 

  return { min, max, avg: roundedAvg };
  
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    let difference = max - min;
    
    return difference
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let sumOddElement = 0;

     for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++){
        const num = arr[i];
        if (num % 2 ===0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }

    if (countEvenElement === 0) return 0;

    return sumEvenElement / countEvenElement;

}