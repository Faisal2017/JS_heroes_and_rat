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

  it('should have an urgency level', function() {
    assert.equal('high', task2.urgency);
  })

  it('should have an attached reward', function() {
    assert.equal('green trousers', task1.reward);
  })

  it('should start with task complete set to false', function() {
    assert.equal(false, task1.taskComplete);
  })

  it('should be able to set task complete marker to true', function() {
    task2.setToComplete();
    assert.equal(true, task2.taskComplete);
  })
})