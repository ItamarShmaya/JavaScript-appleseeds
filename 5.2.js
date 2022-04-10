function languageCheck(language) {
  switch(language.toLowerCase()) {
    case "mandarin":
      console.log("Most number of native speaker!");
      break;
    case "spanish":
      console.log("2nd place in number of native speaker!");
      break;
    case "english":
      console.log("3rd place");
      break;
    case "hinde":
      console.log("Number 4");
      break;
    case "arabic":
      console.log("5th most spken language");
      break;
    default:
      console.log("Not in top 5");
  
  }  
}

languageCheck("english");

