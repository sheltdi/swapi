const tester = document.querySelector(".test");
let results;
tester.innerText = "other Test";

  async function fetchData(url) {
    await fetch(url)
    .then(res => res.json())
    .then(res => {
      results = res;
      // displayResults();
      return tester;
    })
  }
  // fetchData("https://swapi.dev/api/people");

function displayResults() {
  tester.innerText = results.results[0].name;
}