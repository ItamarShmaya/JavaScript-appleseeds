const population = [1441, 329.5, 55.98, 8]

function percentageOfWorld1 (population) {
  return population / 7900  * 100;
}

function populationPercentages(arr) {
  const percentages = [];
  for (let item of population) {
    percentages.push(percentageOfWorld1(item).toFixed(2));
  }
  return percentages;
}

console.log(populationPercentages(population));