var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      counter--;
      let value= storage[counter];
      delete storage[counter];
      return value;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
