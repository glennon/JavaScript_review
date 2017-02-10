// initialize variables
var scores = [60,50,60,58,54,54,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
var costs = [0.25,0.27,0.25,0.25,0.25,0.25,
             0.33,0.31,0.25,0.29,0.27,0.22,
             0.31,0.25,0.25,0.33,0.21,0.25,
             0.25,0.25,0.28,0.25,0.24,0.22,
             0.20,0.25,0.30,0.25,0.24,0.25,
             0.25,0.25,0.27,0.25,0.26,0.29];
var output;


// output bubble experiment values
function printAndGetHighScores(scores,costs) {
  var highestValue;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i +
    " score: " + scores[i] + " cost: "+ costs[i];
    console.log(output);
    if (i == 0) {
      highestValue = scores[i];
    } else {
      if (highestValue < scores[i]) {
        highestValue = scores[i];
      }
    }
  }
  return highestValue;
}

var highScore = printAndGetHighScores(scores,costs);
// output number of experiments
output = "Bubble tests: " + scores.length;
console.log(output);

output = "Highest bubble score: " + highScore;
console.log(output);

function getBestResults(scores,myHighScore) {
  // output address locations of highest bubble yield
  var highestAddress = [];
  for (var y = 0; y < scores.length; y++) {
    if (scores[y] == myHighScore) {
      // spec requires a # before the value, so added here to make output easier
      highestAddress.push(y);
    }
  }
  return highestAddress;
}

var bestSolutions = getBestResults(scores,highScore);
output = "Solutions with highest score: " + bestSolutions;
console.log(output);

function getMostCostEffectiveSolution(scores, costs, highScore) {
  var lilCost = 9999;
  var lilCostIndex;
  for (var q = 0; q < scores.length; q++) {
    if (scores[q] == highScore) {
      if (lilCost > costs[q]) {
        lilCostIndex = q;
        lilCost = costs[q];
      }
    }
  }
  return lilCostIndex;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective.");
