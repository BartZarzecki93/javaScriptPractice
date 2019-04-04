var starWarsPeopleList = document.querySelector("ul");

fetch("https://swapi.co/api/people")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let people = json.results;

    for (p of people) {
      let listItem = document.createElement("li");
      listItem.innerHTML = "<p>" + p.name + "</p>";
      starWarsPeopleList.appendChild(listItem);
    }
  });

var starWarsPeopleList1 = document.querySelector("ul.list2");

fetch("https://swapi.co/api/planets")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let planets = json.results;

    for (w of planets) {
      let listItem1 = document.createElement("li");
      listItem1.innerHTML = "<p>" + w.name + "</p>";
      starWarsPeopleList1.appendChild(listItem1);
    }
  });

document
  .getElementById("clickThisButton")
  .addEventListener("click", details => {
    document.body.style.backgroundColor = "blue";
  }); //changing background of the whole body to blue

document
  .getElementById("clickThisButton1")
  .addEventListener("click", details => {
    var starWarsPeopleList2 = document.querySelector("ul.list3");

    fetch("https://swapi.co/api/people")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let people1 = json.results;
        //let people2 = json.results2

        for (a of people1) {
          let listItem2 = document.createElement("li");
          listItem2.innerHTML = "<p>" + a.name + "   " + a.homeworld + "</p>";
          starWarsPeopleList2.appendChild(listItem2);
        }
      });
  }); //changing background of the whole body to blue
