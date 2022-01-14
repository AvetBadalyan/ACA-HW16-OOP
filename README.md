# ACA-HW16-OOP
Exercises with OOP, Function Constructors, Classes etc

01. Create an Author class and a Book class.

Author should have:
fields, name, email, gender, methods, getters for fields, toString()

Book should have:
fields, title, author(Author), price, quantity, methods, 
getProfit() - which calculates the profit from the book based on the price and quantity.
toString()

[01.authorBoook.js](01.authorBoook.js)

02. Write classes: Person class and Student class.

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

Student is inherited from Person. It should have
fields
year
fee
program(array of { programName, grade })

[02.Student.js](02.Student.js)

