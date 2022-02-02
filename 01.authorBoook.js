// Create an Author class and a Book class.

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender.toLowerCase();
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  set name(anun) {
    if (typeof anun !== "string") {
      throw new Error("Please write a string!");
    }
    this._name = anun;
  }

  toString() {
    if (this._gender === "female") {
      return `Ms ${this._name}`;
    } else if (this._gender === "male") {
      return `Mr ${this._name}`;
    }

    return `Please input correctly "female" or "male" `;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(str) {
    if (typeof str !== "string") {
      return "The argument of setter must be a string!";
    }

    this._title = str.toUpperCase();
  }

  get author() {
    return this._author;
  }

  get price() {
    return this._price;
  }

  set price(dollar) {
    if (typeof dollar !== "number" || isNaN(dollar)) {
      return "Please write a number!";
    }

    this._price = dollar;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quant) {
    if (typeof quant !== "number" || isNaN(quant)) {
      return "Please write a number!";
    }

    this._quantity = quant;
  }

  getProfit() {
    return this._quantity * this._price;
  }

  toString() {
    return `The Book " ${this._title} " which Author is ${this._author}  costs ${this._price} $`;
  }
}

const author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");

console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

author1.name = 12;

const book1 = new Book("Jungle book", author1, 20, 5);

console.log(book1.title);
console.log(book1.author);
console.log(book1.getProfit());
console.log(book1.toString());
