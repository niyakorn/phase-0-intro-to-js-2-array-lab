// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Ralph");
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
}
function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
}
function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1, cats.length);
}