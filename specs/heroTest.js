var assert = require('assert');
var Hero = require("../hero.js");

describe('Hero', function() {
  var hero;

  beforeEach(function() {
    hero = new Hero('Kvothe', 100, 'burrito');
  })

  it('should have a name', function() {
    assert.equal(hero.name, 'Kvothe');
  })

  it('should have health', function() {
    assert.equal(hero.health, 100);
  })

  it('should have a favourite food', function() {
    assert.equal(hero.favouriteFood, 'burrito')
  })


})
