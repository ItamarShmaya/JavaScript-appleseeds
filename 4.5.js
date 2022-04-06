function isLeap(year) {
  if(year % 400 === 0) {
    console.log("It is indeed a leap year");
  }
  else if (year % 4 === 0 && !(year % 100 === 0)) {
    console.log("It is indeed a leap year");
  } else {
    console.log("Not a leap year");
  }
}

isLeap(2200);
