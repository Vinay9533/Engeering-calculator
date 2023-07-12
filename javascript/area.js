function calculateArea() {
    var roomSelect = document.getElementById("roomSelect");
    var length = parseFloat(document.getElementById("length").value);
    var lengthUnit = document.getElementById("lengthUnit").value;
    var breadth = parseFloat(document.getElementById("breadth").value);
    var breadthUnit = document.getElementById("breadthUnit").value;

    // Convert length and breadth to feet
    if (lengthUnit === "inches") {
      length /= 12;
    }
    if (breadthUnit === "inches") {
      breadth /= 12;
    }

    var carpetArea = 0;
    var selectedOptions = roomSelect.selectedOptions;

    for (var i = 0; i < selectedOptions.length; i++) {
      carpetArea += length * breadth;
    }

    // Subtract thickness of inner walls from carpet area
    var thicknessOfWalls = 0; // Set the thickness of inner walls in feet
    carpetArea -= selectedOptions.length * thicknessOfWalls;

    var builtUpArea = carpetArea;
    var ductsWallsArea = 0; // Set the area of ducts walls in feet^2
    builtUpArea += ductsWallsArea;

    var terraceArea = (length * breadth) / 2; // Half the area of the terrace in feet^2
    builtUpArea += terraceArea;

    var superBuiltUpArea = builtUpArea;
    var proportionateCommonArea = 0; // Set the proportionate common area in feet^2
    superBuiltUpArea += proportionateCommonArea;

    var output = document.getElementById("output");
    output.innerHTML =
      "Carpet Area: " + carpetArea.toFixed(2) + " ft²<br>" +
      "Built Up Area: " + builtUpArea.toFixed(2) + " ft²<br>" +
      "Super Built Up Area: " + superBuiltUpArea.toFixed(2) + " ft²";
  }