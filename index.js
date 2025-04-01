// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);
// console.log(cats);

function destructivelyAppendCat(name) {
  cats.push(name);
}

destructivelyAppendCat["Ralph"];
console.log(cats);

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
destructivelyPrependCat["Bob"];
console.log(cats);

function destructivelyRemoveLastCat() {
  cats.pop(cats);
}
console.log(cats);

function destructivelyRemoveFirstCat() {
  cats.shift(cats);
}
console.log(cats);

function appendCat(name) {
  return [...cats, name];
}
let newCats = appendCat("Broom");
console.log(cats);

 const originalCats = [...cats];

function prependCat(name) {
  return [name,...cats];
}
 const newestCats = prependCat("Arnold");
console.log(newestCats);

 const removedLastCat = removeLastCat();
function removeLastCat() {
  return cats.slice(0, -1);
}
const removedFirstCat = removeFirstCat();
 
function removeFirstCat() {
  return cats.slice(1);
}


console.log("Original Cats:", cats); 
console.log("Removed Last Cat:", removedLastCat);



console.log("Original Cats:", cats);
console.log("Removed First Cat:", removedFirstCat);