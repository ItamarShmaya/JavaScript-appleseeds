const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
 ];

 for(let item of listOfNeighbours) {
   for(let country of item) {
     console.log(`Neighbour: ${country}`);
   }
 }
 