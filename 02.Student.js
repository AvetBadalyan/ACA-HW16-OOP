/* 
Write classes: Person class and Student class. Person should have:
fields
firstName
lastName
gender
age
methods
getters for fields
setters for fields
toString()

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

Student is inherited from Person. It should have
fields
year
fee
program(array of { programName, grade })
*/

class Person {
  constructor(firstName, lastName, gen, age) {
    this._firstname = firstName;
    this._lastname = lastName;
    this._gender = gen.toLowerCase();
    this._age = age;
  }

  get firstName() {
    return this._firstname;
  }

  set firstName(anun) {
    if(typeof(anun) !== "string") {
      return `Please input a string!`;
    }

    this._firstname = anun;
  }

  get lastName() {
    return this._lastname;
  }

  set lastName(azganun) {
    if(typeof(azganun) !== "string") {
    return `Please input a string!`;
    }

    this._lastname = azganun;
  }

  get gender() {
    return this._gender;
  }

  set gender(maleFemale) {
    if (maleFemale.toLowerCase() === "female" || maleFemale.toLowerCase() === "male") {
      this._gender = maleFemale;
    }

    return `Please write correctly "female" or "male" `;
  }

  get age() {
    return this._age;
  }

  set age(number) {
    if(typeof(tariq) !== "number" || isNaN(tariq)) {
      return "Please fill in a number!";
    }
    this._age = tariq;
  }

  toString() {
    return ` The Person called ${this._firstname} ${this._lastname} is ${this._age} years old.`
  }
}

const user1 = new Person("Avet", "Badalyan", "male", 26);
console.log(user1.toString()); 

class Student extends Person {
  constructor(firstname, lastname, gender, age, year, fee, program) {
    super(firstname, lastname, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program
  }

  get year() {
    return this._year;
  }

  set year(tariner) {
    if(typeof(tariner) !== "number" || isNaN(tariner)) {
      return "Please fill in a number!";
    }

    this._year = tariner;
  }

  get fee() {
    return this._fee;
  }

  set fee(dram) {
    if(typeof(dram) !== "number" || isNaN(dram)) {
      return "Please fill in a number!";
    }

    this._fee = dram;
  }

  toString() {
      return `The Student ${this._firstname} ${this._lastname} which is ${this._gender} 
    and ${this._age} years old, studies for ${this._year} years and pays ${this._fee} dram as fee `
  }
}

const student1 = new Student("Avet","Badalyan", "male", 26, 0.5,1250000,
    [
     {
    programName: "Javascript",
    grade: 90
        }
    ]);