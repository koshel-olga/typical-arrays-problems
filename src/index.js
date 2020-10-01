
exports.min = function min (array) {
  if ((Array.isArray(array)) && (array.length > 0) ) {
    minimum = 0;
    for(i=0; i<array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i];
      } 
    }
    return minimum;
  }
  return 0;
}

exports.max = function max (array) {
  if ((Array.isArray(array)) && (array.length > 0) ) {
    maximum = 0;
    for(i=0; i<array.length; i++) {
      if (array[i] > maximum) {
        maximum = array[i];
      } 
    }    
    return maximum;
  }
  return 0;
}

exports.avg = function avg (array) {
  if ((Array.isArray(array)) && (array.length > 0) ) {
    sum = 0.;
    for(i=0; i<array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  }
  return 0;
}
