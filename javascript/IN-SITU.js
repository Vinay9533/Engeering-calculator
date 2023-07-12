function calculate() {
    // Get input values
    var diameter = parseFloat(document.getElementById("diameter").value);
    var height = parseFloat(document.getElementById("height").value);
    var w1 = parseFloat(document.getElementById("w1").value);
    var w2 = parseFloat(document.getElementById("w2").value);
  
    // Calculate field dry density
    var volume = Math.PI/4 * diameter * diameter * height;
    var w3 = w2-w1;
    var dryDensity = w3 / volume;
    var w=(w2-w3)/(w3-w1)*100;
    var d=1+(w/100);
    var sd=dryDensity/d;
  
    // Calculate average water content
    var waterContent = ((w2 - w3) / (w3 - w1)) * 100;
  
    // Display results
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Field Dry Density: " + sd.toFixed(2) + " g/cm³<br>";
    resultElement.innerHTML += "Average Water Content: " + waterContent.toFixed(2) + " %";
  }