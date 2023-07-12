document.getElementById('codForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var fasBlankA = parseFloat(document.getElementById('fasBlankA').value);
  var fasSampleB = parseFloat(document.getElementById('fasSampleB').value);
  var normality = parseFloat(document.getElementById('normality').value);
  var sampleVolume = parseFloat(document.getElementById('sampleVolume').value);

  // Calculate COD
  var cod = ((fasBlankA - fasSampleB) * normality * 8000) / sampleVolume;

  // Display result
  document.getElementById('result').textContent = 'COD: ' + cod.toFixed(2) + ' mg/L';
});