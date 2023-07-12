function calculateSpecificGravity() {
    var densityBottleMass = parseFloat(document.getElementById('density-bottle-mass').value);
    var bottleDrySoilMass = parseFloat(document.getElementById('bottle-dry-soil-mass').value);
    var bottleSoilLiquidMass = parseFloat(document.getElementById('bottle-soil-liquid-mass').value);
    var bottleLiquidMass = parseFloat(document.getElementById('bottle-liquid-mass').value);
  
    if (
      isNaN(densityBottleMass) ||
      isNaN(bottleDrySoilMass) ||
      isNaN(bottleSoilLiquidMass) ||
      isNaN(bottleLiquidMass)
    ) {
      document.getElementById('result').textContent = 'Please enter valid values.';
      return;
    }
  
    var specificGravity =
      (bottleDrySoilMass - densityBottleMass) /
      ((bottleLiquidMass - densityBottleMass) - (bottleSoilLiquidMass - bottleDrySoilMass));
  
    document.getElementById('result').textContent = 'Specific Gravity: ' + specificGravity.toFixed(2);
  }