document.getElementById('steelForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    var unit = document.getElementById('unit').value;
    var diameter = parseFloat(document.getElementById('diameter').value);
    var length = parseFloat(document.getElementById('length').value);
    var quantity = parseFloat(document.getElementById('quantity').value);
  
    // Conversion factors
    var meterToKg = 7.85;
    var cmToKg = meterToKg / 10000;
    var inchToKg = meterToKg * 2.76799e-4;
    var ftToKg = inchToKg * 12;
  
    // Calculate weight
    var weight = 0;
  
    if (unit === 'm') {
      weight = diameter * diameter * length * meterToKg * quantity;
    } else if (unit === 'cm') {
      weight = diameter * diameter * length * cmToKg * quantity;
    } else if (unit === 'in') {
      weight = diameter * diameter * length * inchToKg * quantity;
    } else if (unit === 'ft') {
      weight = diameter * diameter * length * ftToKg * quantity;
    }
  
    // Display result
    document.getElementById('result').textContent = 'Weight: ' + weight.toFixed(2) + ' kg';
  });