function calculateShearStrength() {
    var provingRingConstant = parseFloat(document.getElementById("provingRingConstant").value);
    var sampleArea = parseFloat(document.getElementById("sampleArea").value);
    var horizontalDialGauge = parseFloat(document.getElementById("horizontalDialGauge").value);
    var provingRingReading = parseFloat(document.getElementById("provingRingReading").value);
    var normalStress = parseFloat(document.getElementById("normalStress").value);
  
    // Calculate shear strength
    var shearStrength = (provingRingReading * provingRingConstant) ;
    var d=horizontalDialGauge/3;
    var area=sampleArea * (1 - d);
    var shearStress = shearStrength / area;
  
    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Shear Strength: " + shearStrength.toFixed(2) + " kg/cm<sup>2</sup></p>" +
      "<p>Shear Stress: " + shearStress.toFixed(2) + " kg/cm<sup>2</sup></p>";
  }