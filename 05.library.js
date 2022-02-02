////////////////////////////////////////////////// class Book ///////////////////////////////////////////////////////////

class Book {
  constructor(title, author) {
    this._name = title;
    this._author = author;
  }

  get title() {
    return this._name;
  }

  get author() {
    return this._author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }

  isTheSameBook(book) {
    return (
      book instanceof Book &&
      book.name === this.name &&
      book.author === this.author
    );
  }
}

////////////////////////////////////////////////// class LibraryBookBase ///////////////////////////////////////////////////////////

class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author);
    this._id = LibraryBookBase.number++;
  }

  static number = 0;

  get id() {
    return this._id;
  }

  toString() {
    return `${this.id}. ${this.title} by ${this.author}`;
  }
}

//////////////////////////////////////////////////// class LibraryBook /////////////////////////////////////////////////////////

class LibraryBook extends Book {
  constructor(title, author, quantity = 1) {
    super(title, author);
    this._id = LibraryBook.idNumber++;
    this._quantity = quantity;
  }

  get id() {
    return this._id;
  }

  static idNumber = 0;

  get quantity() {
    return this._quantity;
  }

  increaseQuantityBy(number = 1) {
    if (typeof number === "number" && !Number.isNaN(number))
      this._quantity += number;
  }

  decreaseQuantityBy(number = 1) {
    if (
      typeof number === "number" &&
      !Number.isNaN(number) &&
      number <= this._quantity
    )
      this._quantity -= number;
  }

  toString() {
    return `${this.id}. ${this.title} by ${this.author}`;
  }
}

//////////////////////////////////////////////////// class ReaderBook ///////////////////////////////////////////////////////////////

class ReaderBook extends Book {
  constructor(title, author, expirationDate) {
    super(title, author);
    this._id = ReaderBook.idCount++;
    this._expirationDate = expirationDate;
    this._isReturned = false;
  }

  static idCount = 0;

  get id() {
    return this._id;
  }

  get isReturned() {
    return this._isReturned;
  }

  set isReturned(boolean) {
    if (typeof boolean === "boolean") {
      this._isReturned = boolean;
    } else {
      this._isReturned = true;
    }
  }

  get expirationDate() {
    return this._expirationDate;
  }

  set expirationDate(newExparationDate) {
    if (typeof newExparationDate === "string") {
      this._expirationDate = newExparationDate;

      return "Expiration date successfully updated!";
    } else {
      return "Please fill in a valid date";
    }
  }

  toString() {
    return `${this.id}. ${this.title} by ${this.author}`;
  }
}

////////////////////////////////////////////////////// class Library ////////////////////////////////////////////////////////

class Library {
  constructor(title, books) {
    this._name = title;
    (this._books = books), (this._readers = []);
  }

  get title() {
    return this._name;
  }

  get books() {
    return this._books;
  }

  get readers() {
    return this._readers;
  }

  doHaveBook(requestedBook) {
    if (requestedBook instanceof Book) {
      return this.books.some((el) => {
        return (
          el.name === requestedBook.name && el.author === requestedBook.author
        );
      });
    }

    return "Invalid book!!";
  }

  addBook(newBook) {
    if (newBook instanceof LibraryBook) {
      this._books.push(newBook);

      return "Your book successfully added!";
    }

    return "Invalid Book!!";
  }

  addBooks(newBooks) {
    const isValidBooks = newBooks.every((el) => el instanceof LibraryBook);
    if (isValidBooks) {
      this._books = [...this._books, ...newBooks];

      return "All Your books have been successfully added!";
    }

    return "Invalid Book!!";
  }
}

////////////////////////////////////////////////////// CREATING NEW BOOKS AND LIBRARIES ////////////////////////////////////////////////////////

const book1 = new LibraryBook("Master and Margarita", "M. Bulgakov", 10);
const book2 = new LibraryBook("Passed days", "Charles Aznavour", 10);
const book3 = new LibraryBook(
  "Thus Spoke Zarathustra",
  "Friedrich Nietzsche",
  15
);
const book4 = new LibraryBook("The Stepwolf", "Hermann Hesse", 3);
const book5 = new LibraryBook("The Pragmatic Programmer", "Andy Hunt", 2);

const myBooks = [book1, book2, book3, book4, book5];

const myLibrary = new Library("Avet's Library", myBooks);

console.log(myLibrary.doHaveBook(book3));

myLibrary.addBooks([book4, book5]);

console.log(myLibrary.books);
console.log(book1.isTheSameBook(book2));
console.log(book1.isTheSameBook(book3));
