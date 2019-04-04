var amIGood = false; //A Boolean variable to define whether you are naughty or nice.

// Promise
var iCanHasGift = new Promise(function(resolve, reject) {
  if (amIGood) {
    var gift = {
      brand: "HasMattelbro",
      item: "Turbo-Man action figure"
    };
    resolve(gift); // fulfilled
  } else {
    var naughty = "You've made Santa's naughty list; enjoy your coal!";
    reject(naughty); // rejected
  }
});

//checkTwice();

// 2nd promise
var playDate = function(gift) {
  return new Promise(function(resolve, reject) {
    var message =
      "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " +
      gift.brand +
      " " +
      gift.item +
      "?";

    resolve(message);
  });
};

// Promise call
var checkTwice = function() {
  console.log("before Christmas"); // log before
  iCanHasGift
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(() => {
      console.log("after opening gifts"); // log after
    });
};

//checkTwice();

// 2nd promise
var playDate = function(gift) {
  return new Promise(function(resolve, reject) {
    var message =
      "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " +
      gift.brand +
      " " +
      gift.item +
      "?";

    resolve(message);
  });
};

// 2nd promise
var playDate = function(gift) {
  var message =
    "Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " +
    gift.brand +
    " " +
    gift.item +
    "?";

  return Promise.resolve(message);
};

checkTwice();
