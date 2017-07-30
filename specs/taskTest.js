var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {
  var task1;
  var task2;

  beforeEach(function() {
    task1 = new Task(10, 'medium', 'green trousers');
    task2 = new Task(13, 'high', 'blue trousers');
  })

  it('should have a difficulty level', function() {
    assert.equal(10, task1.difficulty);
  })

})