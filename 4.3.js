let john = [89, 421, 10];
let mike = [45, 453, 44];
let mary = [97, 487, 105]; 
let johnAvg = avgScore(john);
let mikeAvg = avgScore(mike);
let maryAvg = avgScore(mary);

function avgScore(arr) {
  let total = 0;
  for(num of arr) {
    total += num;
  }
  return total / arr.length;
}

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log(`The winnig team is John's team with an average score of ${johnAvg}`)
}
else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log(`The winnig team is Mike's team with an average score of ${mikeAvg}`)
}
else if (maryAvg > johnAvg && maryAvg  > mikeAvg ) {
  console.log(`The winnig team is Mary's team with an average score of ${maryAvg}`)
}
else {
  console.log(`Draw ${mikeAvg}`);
}
