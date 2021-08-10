var Queue = function() {

  var someInstance = {
    storage:{},
    head: 0,
    tail: 0,
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail ++;
  },

  dequeue: function() {
    if (this.head < this.tail) {
      let value = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return value;
    }
  },

  size: function() {
    return this.tail - this.head;
  }
};


