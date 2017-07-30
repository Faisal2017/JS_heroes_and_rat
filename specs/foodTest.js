var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {
  var food;

  beforeEach(function() {
    food = new Food('blueberry pie', 20);
  })

  it('should have a name', function() {
    assert.equal(food.name, 'blueberry pie');
  })

  it('should have a healing value', function() {
    assert.equal(food.healingValue, 20);
  })
  
})