// Implementation of a last in first out stack
function lifoStack () {
  this.stack = new Array()

  // Add a new item to the top of the stack
  this.push = function (item) {
    return this.stack.push(item)
  }

  // Remove the top item from the stack
  this.pop = function () {
    return this.stack.pop()
  }
}

// Implementation of a queue, also a first in first out stack
function fifoQueue () {
  this.queue = new Array()

  // Add a new item to the queue
  this.enqueue = function (item) {
    this.queue.unshift(item)
  }

  // Remove the first item in the queue
  this.dequeue = function () {
    return this.queue.pop()
  }
}
