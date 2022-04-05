
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Suterday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayName;
let dayOfMonth;
let month;
let year;
let date = new Date();

function today(date) {
  dayName = weekdays[date.getDay()];
  dayOfMonth = date.getDate();
  month= months[date.getMonth()];
  year = date.getFullYear();
  return `Today is ${dayName} the ${dayOfMonth} of ${month}, ${year}`;
}

console.log(today(date));