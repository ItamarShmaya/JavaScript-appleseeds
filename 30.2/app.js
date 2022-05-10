const API_KEY = "&apikey=61e14210";
const form = document.getElementById("form");
const movieTitleInput = document.getElementById("searchbar");
const movieYearInput = document.getElementById("year");
const movieContainer = document.getElementById("movie-container");

form.addEventListener("submit", getMovie)

async function getMovie(e) {
  e.preventDefault();
  if(document.querySelector(".notFound")) document.querySelector(".notFound").remove();
  const title = movieTitleInput.value;
  const year = movieYearInput.value;
  movieTitleInput.value = "";
  movieYearInput.value = "";
  const url = `https://www.omdbapi.com/?t=${title}&y=${year}${API_KEY}`;
  try {
    const movieData = await getApiData(url);
    if(movieData.Response === "False") throw new Error("Title not found");
    displayMovie(movieData);
  } catch(e) {
    const p = document.createElement("p");
    p.textContent = e;
    p.classList.add("notFound");
    if(document.querySelector(".poster")) removePosterContainer();
    if(document.querySelector(".movie-info")) removeMovieInfoContainer();
    movieContainer.append(p);
  }
}

function displayMovie({ Poster, Title, Ratings, Genre, Year, Plot, Director, Actors }) {
  if(document.querySelector(".poster")) removePosterContainer();
  if(document.querySelector(".movie-info")) removeMovieInfoContainer();
  createPosterContainer();
  createMovieInfoContainer();
  displayPoster(Poster);
  displayTitle(Title);
  displayRatings(Ratings);
  displayGenre(Genre);
  displayYear(Year);
  displayPlot(Plot);
  displayDirector(Director);
  displayActors(Actors);

  // movieContainer.innerHTML = `
  // <div class="poster">
  //   <img src=${Poster}>
  // </div>
  // <div class="movie-info">
  //   <h2>${Title}</h2>
  //   <ul class="ratings">
  //     <li>${Ratings[0].Source}<br>${Ratings[0].Value}</li>
  //     <li>${Ratings[1].Source}<br>${Ratings[1].Value}</li>
  //     <li>${Ratings[2].Source}<br>${Ratings[2].Value}</li>
  //   </ul>
  //   <p class="genre">
  //     Genre: ${Genre}
  //   </p>
  //   <p class="year">
  //     year: ${Year}
  //   </p>
  //   <p class="plot">
  //     plot: ${Plot}
  //   </p>
  //   <p class="director">
  //     director: ${Director}
  //   </p>
  //   <p class="actors">
  //     actors: ${Actors}
  //   </p>
  // </div>`

}

async function getApiData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data; 
}

function createPosterContainer() {
  const posterContainer = document.createElement("div");
  posterContainer.classList.add("poster");
  movieContainer.append(posterContainer);
}

function createMovieInfoContainer() {
  const movieInfoContainer = document.createElement("div");
  movieInfoContainer.classList.add("movie-info");
  movieContainer.append(movieInfoContainer);
}

function removePosterContainer() {
  const posterContainer = document.querySelector(".poster");
  posterContainer.remove();
}

function removeMovieInfoContainer() {
  const movieInfoContainer = document.querySelector(".movie-info");
  movieInfoContainer.remove();
}

function displayPoster(poster) {
  const img = document.createElement("img");
  img.src = poster;
  document.querySelector(".poster").append(img);
}

function displayTitle(title) { 
  const h2 = document.createElement("h2");
  h2.classList.add("title");
  h2.innerText = title;
  document.querySelector(".movie-info").append(h2);
}

function displayRatings(ratings) {
  const ul = document.createElement("ul");
  ul.classList.add("ratings");
  for(let rating of ratings) {
    const li = document.createElement("li")
    const logo = document.createElement("img");
    switch(rating.Source) {
      case "Internet Movie Database" :
        logo.src = "https://i.ibb.co/dth8xgq/imdb.png";
        break;
      case "Rotten Tomatoes" :
        logo.src = "https://i.ibb.co/BCy3STv/tomato.png";
        break;
      case "Metacritic" :
        logo.src = "https://i.ibb.co/5jVT2rK/meta-critic.png";
        break;
    }
    logo.classList.add("logo");
    li.append(logo)
    li.append(document.createTextNode(rating.Value));
    ul.append(li);
  }
  document.querySelector(".movie-info").append(ul);
}

function displayGenre(genre) {
  const p = document.createElement("p");
  p.classList.add("genre");
  p.innerText = `Genre: ${genre}`;
  document.querySelector(".movie-info").append(p);
}

function displayYear(year) {
  const p = document.createElement("p");
  p.classList.add("year");
  p.innerText = `Year: ${year}`;
  document.querySelector(".movie-info").append(p);
}

function displayPlot(plot) {
  const p = document.createElement("p");
  p.classList.add("year");
  p.innerText = plot;
  document.querySelector(".movie-info").append(p);
}
function displayDirector(director) {
  const p = document.createElement("p");
  p.classList.add("director");
  p.innerText = `Director: ${director}`;
  document.querySelector(".movie-info").append(p);
}

function displayActors(actors) {
  const p = document.createElement("p");
  p.classList.add("actors");
  p.innerText = `Actors: ${actors}`;
  document.querySelector(".movie-info").append(p);
}
