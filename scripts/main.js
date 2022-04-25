// Query Selectors
const peopleList = document.querySelector(".list-people");
const peopleBtn = document.querySelector(".people-button");
const peopleSection = document.querySelector(".people")
const people = new People();

let displayData = function() {
  people.fetchData();
}


function isSelectedPerson(e) {
 return e.target.innerHTML;
}

let grabInfo = function(e) {
  let personData = people.currentPage.results;
  let characterData = personData.find( el => el.name === isSelectedPerson(e))
  console.log(characterData)
  return characterData
};

// Event Listeners
peopleBtn.addEventListener("click", displayData)
peopleSection.addEventListener("click", grabInfo)