async function add(numA, numB) {
  return numA + numB;
}

function sub(numA, numB) {
  return new Promise((resolve) => resolve(numA - numB));
}

function mul(numA, numB) {
  return numA * numB;
}

// (5+4) - (3 * (2+1)) - 6

async function calculate() {
  const firstOperation = await add(2, 1); //2+1
  const secondOperation = mul(3, firstOperation); // 3 * (2+1)
  const thirdOperation = await sub(secondOperation, 6); //(3 * (2+1)) - 6
  const fourthOperation = await add(5, 4); // 5+4
  const result = await sub(fourthOperation, thirdOperation);

  console.log(result);
}

calculate();
