class coffeeShop {
  constructor(name = "", menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(order = "") {
    const item = this.menu.find((el) => el.name === order);
    if (item) {
      this.orders.push(item);
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      let lastOrder = this.orders.pop();
      return ` The ${lastOrder} is ready!`;
    } else {
      return `All orders have been fulfilled!`;
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    return this.orders.reduce((cost, item) => {
      cost += item.price$;
      return cost;
    }, 0);
  }

  cheapestItem() {
    const cheapest = this.menu.reduce((acc, el) => {
      if (acc.price >= el.price) {
        acc = el;
      }
      return acc;
    });
    return cheapest.name;
  }

  drinksOnly = function () {
    return this.menu.filter((el) => el.type === "drink");
  };

  foodsOnly = function () {
    return this.menu.filter((el) => el.type === "food");
  };
}

const AvetShopMenu = [
  { name: "Espresso", type: "drink", price$: 2 },
  { name: "Hot Chocolate", type: "drink", price$: 3 },
  { name: "Crepes", type: "food", price$: 4 },
  { name: "Maccofee", type: "drink", price$: 1 },
  { name: "Croissant", type: "food", price$: 1 },
  { name: "Ice cream", type: "food", price$: 2 },
];

const shop1 = new coffeeShop("AvetCoffee", AvetShopMenu);

shop1.addOrder("Crepes");
shop1.addOrder("Ice cream");
console.log(shop1.orders);
console.log(shop1.dueAmount());
