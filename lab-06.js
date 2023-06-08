
class Book {
    constructor(title, author,pubDate,isbn){
        this.title =title;
        this.author =author;
        this.pubDate = pubDate;
        this.isbn =isbn;

    }
}
let atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018","122");
console.log(atomicHabits);


class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    
    addBook(book = {}) {
        const { title = "", author = "", pubDate = "", isbn = ""} = book;
        if (title.length > 0 && author.length > 0) {
          const newBook = { title, author, pubDate, isbn };
          this._books.push(newBook);
        }
}
listBooks() {
    for (const book of this._books) {
      const {title, author, pubDate, isbn} = book;
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
    }
  }
deleteBook(isbn){
    let tempsBooks =[]
    for (const book of this._books){
        if(book.isbn !==isbn){
            tempsBooks.push(book);
        }
        this._books =tempsBooks;
    }
}
deleteBook2(isbn){
    this._books=this._books.filter(book => book.isbn !== isbn);
}
get books(){
    return this._books;
}
get books(){
    return JSON.parse(JSON.stringify(this._books));
}
get count(){
    return this._books.length;
}
}
let book2 = new Book("Atomics Habits", "James Clears", "10/16/2019","124");
let myLib = new Library("CIT Classes")
myLib.addBook(atomicHabits);
console.log(myLib.books);




const library = new Library("New York Times Best Seller List");


const atomicHabits3 = new Book("Atomic Habits 3", "James Clear", "10/16/2018","125");
const atomicHabits4 = new Book("Atomic Habits 4", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("OceanPrey", "John Sandford", "04/13/2021", "1398505501");
// Add book to library and output library count and books
library.addBook(atomicHabits3);
library.addBook(atomicHabits4);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

console.log("* Library after delete *");
library.deleteBook2("059346527X");
library.listBooks();
console.log(`Book count: ${library.count}`);

