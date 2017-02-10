// initialize variables
var scores = [60,50,60,58,54,54,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
var output;
var i = 0;
var x = 0;
var y = 0;
var highestValue;
var highestAddress = [];

// output bubble experiment values
while (i < scores.length) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  i = i + 1;
}

// output number of experiments
output = "Bubble tests: " + scores.length;
console.log(output);

// output experiment # with highest bubble yield
while (x < scores.length) {
  if (x == 0) {
    highestValue = scores[x];
  } else {
    if (highestValue < scores[x]) {
      highestValue = scores[x];
    }
  }
  x = x + 1;
}
output = "Highest bubble score: " + highestValue;
console.log(output);

// output address locations of highest bubble yield
while (y < scores.length) {
  if (scores[y] == highestValue) {
    // spec requires a # before the value, so added here to make output easier
    highestAddress.push("#" + y);
  }
  y = y + 1;
}

output = "Solutions with highest score: " + highestAddress.toString();
console.log(output);
