const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "8 million",
  neighbours: [
    "Jordan",
    "Egypt",
    "Syria",
    "Lebanon"
  ],
  describe() {
    console.log(`${this.country} has ${this.population} people, their mother tounge is ${this.language} they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  }
}

myCountry.describe()
