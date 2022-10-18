function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;

}

Book.prototype.getAvilability = function () {
  if (this.numCopies === 0) {
    return "Out of stock";
  } else if (this.numCopies < 10) {
    return "Low stock"
  }
  return "In stock"
}

Book.prototype.sell = function (numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function (numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
}

const HunterGames = new Book("Hunter Games", "Suzanne Collins", 12345, 5);
console.log(HunterGames.getAvilability());
HunterGames.restock(12);
console.log(HunterGames.getAvilability());
HunterGames.sell(17);
console.log(HunterGames.getAvilability());
