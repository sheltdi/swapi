// Query Selectors
const peopleList = document.querySelector(".list-people");
const peopleBtn = document.querySelector(".people-button");
const peopleSection = document.querySelector(".people")
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next")

const people = new People();

let displayData = function() {
  people.fetchData();
}

function selectedCharacter(e) {
 return e.target.innerHTML;
}

class Profile {
  constructor(data) {
    this.data = data;
  }
  printName() {
    console.log(this.data.name)
  }
}

let returnCharacterInfo = function(e) {
  let personData = people.currentPage.results;
  let characterData = personData.find( el => el.name === selectedCharacter(e))
  let characterProfile = new Profile(characterData);
  console.log(characterProfile)
};

// Event Listeners
peopleBtn.addEventListener("click", displayData)
peopleSection.addEventListener("click", returnCharacterInfo)
