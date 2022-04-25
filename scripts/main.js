// Query Selectors
const peopleList = document.querySelector(".list-people");
const peopleBtn = document.querySelector(".people-button");
const peopleSection = document.querySelector(".people");
const filmList = document.querySelector(".list-films");
const filmsBtn = document.querySelector(".films-button");
const filmSection = document.querySelector(".film")
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

const people = new People();
const films = new Films();


// API Calls
let displayFilms = function() {
  films.fetchData();
}

let displayPeople = function() {
  people.fetchData();
}

let nextPage = function() {
  people.nextPage();
  people.displayPeople();
}

let previousPage = function() {
  people.previousPage();
  people.displayPeople();
}


function selectedCharacter(e) {
 return e.target.innerHTML;
}


// Event Listeners
peopleBtn.addEventListener("click", displayPeople)
filmsBtn.addEventListener("click", displayFilms )
nextButton.addEventListener("click", nextPage);
backButton.addEventListener("click", previousPage)