var readingsCount = 0;
    
    function addReadingRow() {
      var tableBody = document.getElementById("readingsTableBody");
      
      var row = document.createElement("tr");
      
      var dialGaugeCell = document.createElement("td");
      var dialGaugeInput = document.createElement("input");
      dialGaugeInput.type = "number";
      dialGaugeInput.name = "dialGauge" + readingsCount;
      dialGaugeCell.appendChild(dialGaugeInput);
      row.appendChild(dialGaugeCell);
      
      var provingRingCell = document.createElement("td");
      var provingRingInput = document.createElement("input");
      provingRingInput.type = "number";
      provingRingInput.name = "provingRing" + readingsCount;
      provingRingCell.appendChild(provingRingInput);
      row.appendChild(provingRingCell);
      
      tableBody.appendChild(row);
      
      readingsCount++;
    }
    
    function calculateUCS() {
      var initialDiameter = parseFloat(document.getElementById("initialDiameter").value);
      var initialLength = parseFloat(document.getElementById("initialLength").value);
      var initialDensity = parseFloat(document.getElementById("initialDensity").value);
      var provingRingConstant = parseFloat(document.getElementById("provingRingConstant").value);
      
      var readingsTable = document.getElementById("readingsTableBody");
      var rows = readingsTable.getElementsByTagName("tr");
      
      var maxStress = 0;
      var totalLoad = 0;
      
      for (var i = 0; i < rows.length; i++) {
        var dialGaugeInput = rows[i].querySelector("input[name^='dialGauge']");
        var provingRingInput = rows[i].querySelector("input[name^='provingRing']");
        
        var dialGaugeReading = parseFloat(dialGaugeInput.value);
        var provingRingReading = parseFloat(provingRingInput.value);
        
        var deformation = dialGaugeReading;
        var axialStrain = deformation / initialLength;
        var load = provingRingReading * provingRingConstant;
        var correctedArea = (Math.PI * Math.pow(initialDiameter, 2)) * (1 - axialStrain);
        var stress = load / correctedArea;
        
        if (stress > maxStress) {
          maxStress = stress;
        }
        
        totalLoad += load;
      }
      
      var cohesion = maxStress / 2;
      
      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "Unconfined Compressive Strength (qu): " + maxStress.toFixed(2) + " kg/cm²<br>" +
                                "Cohesion: " + cohesion.toFixed(2) + " kg/cm²<br>" +
                                "Initial Area Of Specimen (A0): " + (Math.PI * Math.pow(initialDiameter, 2) / 4) + " cm²<br>" +
                                "Total Load: " + totalLoad.toFixed(2) + " kg";
    }