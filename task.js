var Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.taskComplete = false;
}

Task.prototype.setToComplete = function() {
  this.taskComplete = true;
}

module.exports = Task;