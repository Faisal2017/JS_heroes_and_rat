var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.taskList = [];
}

Hero.prototype.talk = function() {
  return "Hello, my name is " + this.name;
}

Hero.prototype.eat = function(food) {
  return this.health += food.healingValue;  
}


module.exports = Hero;