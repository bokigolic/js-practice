//  bellow is constructor finction component Movie with 5 parametars

/*function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

// add get function
// to add a function to the prototype we use constructor function name zajedno sa pro

Movie.prototype.getOwerview = function () {
  return `${this.title}, a ${this.genre} firm directed by ${this.director} was relesed in ${this.releaseYear}. It receved a rating of ${this.rating}`

};*/


// create class MOvie and inside constructor

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOwerview(){
    return `${this.title}, a ${this.genre} firm directed by ${this.director} was relesed in ${this.releaseYear}. It receved a rating of ${this.rating}`
  }
}




const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("Batman", "Chrispher Noaln", "Action", 2008, 83);

console.log(Spiderman);
console.log(Spiderman.getOwerview())
console.log(Batman.getOwerview())