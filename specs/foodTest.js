var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {
  var food;

  beforeEach(function() {
    food = new Food('blueberry pie', 20);
  })

  it('should have a name', function() {
    assert.equal('blueberry pie', food.name);
  })

  
})