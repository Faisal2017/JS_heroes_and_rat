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
  if (food.name === this.favouriteFood) {
    return this.health += (food.healingValue * 1.5);
  } else {
    return this.health += food.healingValue;  
  }
}


module.exports = Hero;