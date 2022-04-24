const peopleList = document.querySelector(".list-people");
const peopleBtn = document.querySelector(".people-button");

const people = new People();

let displayData = function() {
  people.fetchData();
}

peopleBtn.addEventListener("click", displayData)