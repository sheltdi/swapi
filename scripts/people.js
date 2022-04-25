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
      this.displayPeople();
    })
  }
  displayPeople() {
    peopleList.innerHTML= "";
    this.currentPage.results.map(result => {
    peopleList.innerHTML+= `<li class="character">${result.name}</li>`
    peopleSection.style.display = "block";
    })
  }
  async nextPage() {
    await fetch(this.currentPage.next)
    .then(res => res.json())
    .then(res => { 
      this.currentPage = res
      return res
    })
  }
  async previousPage() {
    await fetch(this.currentPage.previous)
    .then(res => res.json())
    .then(res => { 
      this.currentPage = res
      return res
    })
  }
} 