function calculateFreeSwellIndex() {
  var distilledWaterHeight = parseFloat(document.getElementById('distilled-water-height').value);
  var keroseneHeight = parseFloat(document.getElementById('kerosene-height').value);

  if (isNaN(distilledWaterHeight) || isNaN(keroseneHeight)) {
    document.getElementById('result').textContent = 'Please enter valid values.';
    return;
  }

  var freeSwellIndex = ((distilledWaterHeight - keroseneHeight) / keroseneHeight) * 100;

  document.getElementById('result').textContent = 'Free Swell Index: ' + freeSwellIndex.toFixed(2);
}