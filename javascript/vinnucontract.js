function calculateCost() {
    var builtupArea = parseFloat(document.getElementById('builtup-area').value);
    var approxCost = parseFloat(document.getElementById('approx-cost').value);
  
    if (isNaN(builtupArea) || isNaN(approxCost)) {
      document.getElementById('result').textContent = 'Please enter valid values.';
      return;
    }
  
    var cementCost = 1200 * builtupArea;
    var sandCost = 800 * builtupArea;
    var aggregateCost = 1000 * builtupArea;
    var steelCost = 2500 * builtupArea;
    var finishersCost = 1500 * builtupArea;
    var fittingsCost = 2000 * builtupArea;
    var totalCost = approxCost * builtupArea;
  
    document.getElementById('result').innerHTML = `
      Cement Cost: ${cementCost} Rupees<br>
      Sand Cost: ${sandCost} Rupees<br>
      Aggregate Cost: ${aggregateCost} Rupees<br>
      Steel Cost: ${steelCost} Rupees<br>
      Finishers Cost: ${finishersCost} Rupees<br>
      Fittings Cost: ${fittingsCost} Rupees<br>
      Total Cost: ${totalCost} Rupees
    `;
  }