
    function calculateWeight() {
      var dimensionA = parseFloat(document.getElementById('dimension-a').value);
      var length = parseFloat(document.getElementById('length').value);
      var unit = document.getElementById('unit').value;
      var materialDensity = parseFloat(document.getElementById('material').value);
      var quantity = parseInt(document.getElementById('quantity').value);

      if (unit === 'mm') {
        length = length / 1000; // convert length to meters
      }

      var weight = dimensionA * dimensionA * length * materialDensity * quantity;
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Weight: ' + (weight / 1000) + ' kg';
    }
