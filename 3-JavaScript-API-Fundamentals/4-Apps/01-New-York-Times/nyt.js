const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "atJV9WGtDjTSAFKN891r7y7xRGaWLwRo"; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");

const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");
const searchForm = document.querySelector("form");
//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none"; //no navigation buttons before the text is displayed

let pageNumber = 0; //setting page numebr to 0
let displayNav = false; //it wont be visible till its called

//event listeners
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage); //3
previousBtn.addEventListener("click", previousPage); //3

//1
function fetchResults(e) {
  console.log(e); //2
  // Assemble the full URL
  e.preventDefault();
  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value; //3
  console.log(url); //4

  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }

  fetch(url)
    .then(function(result) {
      console.log(result);
      return result.json(); //2
    })
    .then(function(json) {
      console.log(json); //3
      displayResults(json);
    });
}

function displayResults(json) {
  var articles = json.response.docs;
  console.log(articles);
  if (articles.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement("article"); //1
      let heading = document.createElement("h2"); //2

      article.appendChild(heading); //3
      section.appendChild(article); //4

      //console.log(i);
    }
  }
}

function nextPage() {
  console.log("Next button clicked");
} //5

function previousPage() {
  console.log("Next button clicked");
} //5
