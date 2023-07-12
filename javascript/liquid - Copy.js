function calculateLiquidLimit() {
  var test1 = readTestInputs(1);
  var test2 = readTestInputs(2);
  var test3 = readTestInputs(3);
  var test4 = readTestInputs(4);

  var tests = [test1, test2, test3, test4];

  var result = document.getElementById('result');
  result.innerHTML = '';

  for (var i = 0; i < tests.length; i++) {
    var test = tests[i];

    if (test.n !== '' && test.w1 !== '' && test.w2 !== '' && test.w3 !== '') {
      var waterContent = calculateWaterContent(test.w1, test.w2, test.w3);
      result.innerHTML += `<p>Test ${i + 1}: ${test.n} blows/drops, Water Content: ${waterContent.toFixed(2)}%</p>`;
    }
  }
}

function readTestInputs(testNumber) {
  var n = document.getElementById(`test${testNumber}-n`).value;
  var w1 = document.getElementById(`test${testNumber}-w1`).value;
  var w2 = document.getElementById(`test${testNumber}-w2`).value;
  var w3 = document.getElementById(`test${testNumber}-w3`).value;

  return {
    n: n,
    w1: w1,
    w2: w2,
    w3: w3,
  };
}

function calculateWaterContent(w1, w2, w3) {
  var waterContent = ((w2 - w1) / (w3 - w1)) * 100;
  return waterContent;
}