function sortNumber(a, b, c) {
  // TODO: Implement Function
  if(isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Please enter number only');
  }

  let sorted = [];

  if(a < b && a < c) {
    if(b < c) {
      sorted = [a, b, c];
    } else {
      sorted = [a, c, b];;
    }
  } else if(b < a && b < c) {
    if(a < c) {
      sorted = [b, a, c];
    } else {
      sorted = [b, c, a];
    }
  } else if(c < a && c < b) {
    if(a < b) {
      sorted = [c, a, b];
    } else {
      sorted = [c, b, a];
    }
  }

  return console.log(sorted);
}

module.exports = sortNumber;
