function steps(n) {
  const arr = Array.from(new Array(n).fill(0).keys(), x => x+1);

  for(let num of arr) {
    let line = "";
    let i = 0;
    for(i = 0; i < num; i++) {
      line += "#";
    }

    for(let j = 0; j < (n - num); j++) {
      line += " ";
    }
    
    line = "'" + line + "'";
    console.log(line);
  }
}

steps(8);