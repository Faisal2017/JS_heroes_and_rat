var assert = require('assert');
var Hero = require("../hero.js");
var Food = require("../food.js");


describe('Hero', function() {
  var hero;
  var food1;
  var food2;

  beforeEach(function() {
    hero = new Hero('Kvothe', 100, 'burrito');
    food1 = new Food('blueberry pie', 20);
    food2 = new Food('burrito', 10);
  })

  it('should have a name', function() {
    assert.equal(hero.name, 'Kvothe');
  })

  it('should have health', function() {
    assert.equal(hero.health, 100);
  })

  it('should have a favourite food', function() {
    assert.equal(hero.favouriteFood, 'burrito');
  })

  it('should be able to talk saying their name', function() {
    assert.equal(hero.talk(), 'Hello, my name is Kvothe');
  })

  it('should have a task list that starts empty', function() {
    assert.equal(hero.taskList.length, 0);
  })

  it('should test that food increases hero health', function() {
    hero.eat(food1);
    assert.equal(hero.health, 120);
  })

  it('should test favourite food provides 1.5 * healing value', function() {
    hero.eat(food2);
    assert.strictEqual(hero.health, 115);
  })

})
