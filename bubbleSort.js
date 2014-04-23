var bubbleSort = function(array) {
  var len = array.length,
      swap,
      endIndex;
  for(var i = 0; i < array.length; i++) {
    for(var j = 0, endIndex = len - 1; j < endIndex; j++) {
      if(array[j] > array[j + 1]) {
        swap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = swap;
      }
    }
  }
  return array;
};
