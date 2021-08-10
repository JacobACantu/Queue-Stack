var Stack = function() {
  let someInstance = {
    storage: [],
    counter: 0
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter --;
      let value = this.storage[this.counter];
      delete this.storage[this.counter];
      return value;
    }
  },
  size: function() {
    return this.counter;
  }
};


