async function add(numA, numB) {
  return numA + numB;
}

function sub(numA, numB) {
  return new Promise((resolve) => resolve(numA - numB));
}

function mul(numA, numB) {
  return numA * numB;
}

// (5+4) - (3 * (2+1)) - 6 = -6

async function calculate() {
  const firstOperation = await add(2, 1); //2+1
  const secondOperation = mul(3, firstOperation); // 3 * (2+1)
  const thirdOperation = await add(5, 4); // 5+4
  const fourthOperation = await sub(thirdOperation, secondOperation); // (5+4) - (3 * (2+1))
  const result = await sub(fourthOperation, 6);

  console.log(result);
}

calculate();
