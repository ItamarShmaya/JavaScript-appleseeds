function countryToLiveIn(language, isIsland, population) {
  if((language.toLowerCase() === "hebrew") && 
  (isIsland === false) && 
  (population < 8000000)) {
    return "You should live in Israel";
  }
  return "'Israel does not meet your criteria.";
}

console.log(countryToLiveIn("hebresw", false, 22));