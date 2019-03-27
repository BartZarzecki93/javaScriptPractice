// cat example

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (var cat in catArray){
  console.log(cat, 'says meow');
}

// this results in 0 says meow
// 1 says meow
// 2 says meow
// 3 says meow
// 4 says meow

// cat example

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (var cat of catArray){
  console.log(cat, 'says meow');
}

// this results in:
// tabby says meow
// british shorthair says meow
// burmese says meow
// maine coon says meow
// rag doll says meow