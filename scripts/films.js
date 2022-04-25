class Films {
  constructor() {
    this.url = "https://swapi.dev/api/films";
    this.currentPage;
  }
  async fetchData() {
    await fetch(this.url)
    .then(res => res.json())
    .then(res => {
      this.currentPage = res;
      this.displayFilms();
    })
  }
  displayFilms() {
    this.currentPage.results.map(result => {
    filmList.innerHTML+= `<li class="movie">${result.title}</li>`
    filmSection.style.display = "block";
    })
  }
}