# ACA-HW16-OOP
Exercises with OOP, Function Constructors, Classes etc

### 01. Create an Author class and a Book class.

Author should have:
fields, name, email, gender, methods, getters for fields, toString()

Book should have:
fields, title, author(Author), price, quantity, methods, 
getProfit() - which calculates the profit from the book based on the price and quantity.
toString()

```js
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

[01.authorBoook.js](01.authorBoook.js)

### 02. Write classes: Person class and Student class.

```js
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

[02.Student.js](02.Student.js)

### 03. SHiritori

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two
rules:
First character of next word must match last character of previous word.
The word must not have already been said.

```js
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```

[03.ShiriTori.js](03.ShiriTori.js)

### 04. CoffeeShop

Properties:
- name: a string (basically, of the shop)
- menu: an array of items (of object type), with each item containing the item (name of the item), type
- (whether food or a drink) and price. orders: an empty array

#### Methods:

  - addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
  - Otherwise, return "This item is currently unavailable!"
  - fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
empty, return "All orders have been fulfilled!"
  - listOrders: returns the list of orders taken, otherwise, an empty array.
  - dueAmount: returns the total amount due for the orders taken.
  - cheapestItem: returns the name of the cheapest item on the menu.
  - drinksOnly: returns only the item names of type drink from the menu.
  - foodOnly: returns only the item names of type food from the menu.
  - IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

[04.coffeeShop.js](04.coffeeShop.js)

