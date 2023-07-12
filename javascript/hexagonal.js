document.getElementById('hexBarForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateWeight();
  });
  
  function calculateWeight() {
    var diameter = document.getElementById('diameter').value;
    var length = document.getElementById('length').value;
    var lengthUnit = document.getElementById('lengthUnit').value;
    var material = document.getElementById('material').value;
    var quantity = document.getElementById('quantity').value;
  
    // Convert length to mm if it is in meters
    if (lengthUnit === 'm') {
      length *= 1000;
    }
  
    var sideLength = diameter / Math.sqrt(3);
    var area = (3 * Math.sqrt(3) * (sideLength ** 2)) / 2;
    var volume = area * length;
    var weight = (volume / 1000000) * material * quantity; // Convert to kg
  
    document.getElementById('result').textContent = 'Weight: ' + weight.toFixed(2) + ' kg';
  }