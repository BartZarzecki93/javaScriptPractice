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
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

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
  console.log("URL: ", url); //4

  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }

  fetch(url)
    .then(function(result) {
      //console.log(result);
      return result.json(); //2
    })
    .then(function(json) {
      //console.log(json); //3
      displayResults(json);
    });
}

function displayResults(json) {
  var articles = json.response.docs;
  //console.log(articles);
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  if (articles.length === 10) {
    nav.style.display = "block"; //shows the nav display if 10 items are in the array
    //document.getElementById("back");
  } else {
    nav.style.display = "none"; //hides the nav display if less than 10 items are in the array
  }
  if (articles.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement("article");
      let heading = document.createElement("h2");
      let link = document.createElement("a");
      let para = document.createElement("p");
      let clearfix = document.createElement("div");
      let img = document.createElement("img"); //1

      let current = articles[i];

      link.href = current.web_url;
      link.textContent = current.headline.main;

      para.textContent = "Keywords: ";

      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement("span");
        span.textContent += current.keywords[j].value + " ";
        para.appendChild(span);
      } //looking for the keywords

      if (current.multimedia.length > 0) {
        img.src = "http://www.nytimes.com/" + current.multimedia[0].url;

        img.alt = current.headline.main;
      } //display image which is asssosited with the article

      clearfix.setAttribute("class", "clearfix");
      console.log("Current:", current);

      article.appendChild(heading);
      section.appendChild(article);
      heading.appendChild(link);
      article.appendChild(para);
      article.appendChild(clearfix);
      article.appendChild(img);
    }
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log("Page number:", pageNumber);
}
function previousPage(e) {
  if (pageNumber > 0) {
    //1
    pageNumber--; //2
  } else {
    return; //3
  }
  fetchResults(e); //4
  console.log("Page:", pageNumber); //5
}
/*
function myFunction() {
  var x = document.getElementById("prev1");
  if (pageNumber < 2) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/
