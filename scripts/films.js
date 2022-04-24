class Films {
  constructor() {
    this.url = "https://swapi.dev/api/people";
    this.currentPage;
  }
  async fetchData() {
    await fetch(this.url)
    .then(res => res.json())
    .then(res => {
      this.currentPage = res;
      return this.currentPage;
    })
  }
}