function calculateParticleDistribution() {
    var sampleWeight = parseFloat(document.getElementById('sample-weight').value);
    var sieveReadings = Array.from(document.getElementsByClassName('sieve-reading')).map(function (input) {
      return parseFloat(input.value);
    });
  
    if (isNaN(sampleWeight) || sieveReadings.some(isNaN)) {
      document.getElementById('result').textContent = 'Please enter valid values.';
      return;
    }
  
    var particleTypes = ['Silt & Clay', 'Sand', 'Gravel'];
    var particleDistribution = [];
  
    // Calculate the particle distribution for each sieve
    for (var i = 0; i < sieveReadings.length; i++) {
      var percentage = (sieveReadings[i] / sampleWeight) * 100;
      if (i === sieveReadings.length - 1) {
        // Last row (Pan)
        particleDistribution.push({
          ParticleType: particleTypes[0],
          Percentage: percentage.toFixed(2),
        });
      } else if (i === 0) {
        // First row (20mm)
        particleDistribution.push({
          ParticleType: particleTypes[2],
          Percentage: percentage.toFixed(2),
        });
      } else if (i < 7) {
        // Rows 2 to 8 (10mm to 425 μm)
        particleDistribution.push({
          ParticleType: particleTypes[1],
          Percentage: percentage.toFixed(2),
        });
      } else {
        // Rows 9 to 12 (300 μm to Pan)
        particleDistribution.push({
          ParticleType: particleTypes[2],
          Percentage: percentage.toFixed(2),
        });
      }
    }
  
    displayParticleDistribution(particleDistribution);
  }
  
  function displayParticleDistribution(particleDistribution) {
    var result = document.getElementById('result');
    result.innerHTML = '<h3>Particle Type Distribution:</h3>';
    for (var i = 0; i < particleDistribution.length; i++) {
      result.innerHTML += `<p>${particleDistribution[i].ParticleType}: ${particleDistribution[i].Percentage}%</p>`;
    }
  }