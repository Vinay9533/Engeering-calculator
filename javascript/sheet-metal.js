function calculateWeight() {
      var dimensionA = parseFloat(document.getElementById('dimension-a').value);
      var dimensionB = parseFloat(document.getElementById('dimension-b').value);
      var thickness = parseFloat(document.getElementById('thickness').value);
      var materialDensity = parseFloat(document.getElementById('material').value);
      var quantity = parseInt(document.getElementById('quantity').value);

      var weight = dimensionA * dimensionB * thickness * materialDensity * quantity;
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Weight: ' + (weight / 1000000) + ' kg';
    }