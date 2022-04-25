class People {
  constructor() {
    this.url = "https://swapi.dev/api/people";
    this.currentPage;
  }
  async fetchData() {
    await fetch(this.url)
    .then(res => res.json())
    .then(res => {
      this.currentPage = res;
      this.displayPeople()
    })
  }
  displayPeople() {
    this.currentPage.results.map(result => {
    peopleList.innerHTML+= `<li class="character">${result.name}</li>`
    peopleSection.style.display = "block";
    // peopleSection.style.listStyle = "none";
    })
  }
} 