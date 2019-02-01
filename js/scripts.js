function PizzaOrder() {
  this.pizzas = [];
  this.pizzaCost - [];
}

OrderTotal.protoype.addPizzaToOrder = function(pizza) {
  this.pizzaCost = pizza.toppingCost(pizza);
  this.pizzas.push(pizza);
}
