function calculateWaterContent() {
    var containerWeight = parseFloat(document.getElementById('container-weight').value);
    var wetWeight = parseFloat(document.getElementById('wet-weight').value);
    var dryWeight = parseFloat(document.getElementById('dry-weight').value);
  
    if (isNaN(containerWeight) || isNaN(wetWeight) || isNaN(dryWeight)) {
      document.getElementById('result').textContent = 'Please enter valid values.';
      return;
    }
  
    var waterContent = ((wetWeight - dryWeight) / (dryWeight - containerWeight)) * 100;
  
    document.getElementById('result').textContent = 'Water Content: ' + waterContent.toFixed(2) + '%';
  }