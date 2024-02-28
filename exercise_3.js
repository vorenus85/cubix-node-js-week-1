function power(numA, numB) {
  const subResults = [];
  const powerResult = Math.pow(numA, numB);

  for (let i = 0; i < numB; i++) {
    subResults.push(Math.pow(numA, i));
  }

  return {
    result: powerResult,
    subResults,
  };
}

console.log(power(2, 3));
