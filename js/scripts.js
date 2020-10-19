var totalPriceArray = [];
function Order (customize, cheese) {
  this.customize=customize
  this.crust = 100;
  this.toppings = 150;
  this.flavor = 200;
  this.pizzaPrice = 0;
  this.drinks = 100;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10.") {
    this.pizzaPrice += 500;
  } else if (this.customSize === "Medium 14.") {
    this.pizzaPrice += 700;
  } else if (this.customSize === "Large.") {
    this.pizzaPrice += 950;
  } else if (this.customSize) === "Jumbo.") {
    this.pizzaPrice +=1400
  }
  if (this.cheese === "cheese") {
    this.pizzaPrice += 200;
  } else if (this.cheese === "light cheese") {
    this.pizzaPrice += 100;
  } else if (this.cheese === "extra cheese") {
    this.pizzaPrice += 250;
  }
  this.pizzaPrice += this.crust;
  this.pizzaPrice += this.toppings;
  this.pizzaPrice += this.flavor;
  this.pizzaPrice += this.drinks
  return this.pizzaPrice;