var Queue = function() {
  var someInstance = {};
  var storage = {};
  var enq = 0;
  var deq = 0;


  // Use an object with numeric keys to store values
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enq] = value;
    enq++;
  };

  someInstance.dequeue = function() {
    if (enq - deq) {
      var result = storage[deq];
      delete storage[deq];
      deq++;
      return result;
    }
  };

  someInstance.size = function() {
    return enq-deq;
  };

  return someInstance;
};

