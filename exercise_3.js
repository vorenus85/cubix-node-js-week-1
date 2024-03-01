function power(numA, numB) {
  const subResults = [];

  for (let i = 0; i < numB; i++) {
    subResults.push(Math.pow(numA, i));
  }

  return {
    result: Math.pow(numA, numB),
    subResults,
  };
}

console.log(power(2, 3));
