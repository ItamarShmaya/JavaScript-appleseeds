function isStrong(password) {
  if(password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

function isStrong1(password) {
  return password.length > 7 ? "Strong" : "Weak" ;
}

function isStrong2(password) {
  return (password.length > 7) && (password.indexOf(" ") !== -1) ? "Strong" : "Weak";
}

const regex = /[A-Z]/;

function isStrong3(password) {
  return (password.length > 7) ? (regex.test(password) ? "Very Strong" : "Strong") : "Weak";
}

console.log(isStrong3("as"));
