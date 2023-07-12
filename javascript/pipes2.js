    function calculateWeight() {
      var diameter = document.getElementById("diameter").value;
      var thickness = document.getElementById("thickness").value;
      var length = document.getElementById("length").value;
      var material = document.getElementById("material").value;
      var quantity = document.getElementById("quantity").value;

      // Convert diameter and thickness from mm to meters
      diameter = diameter / 1000;
      thickness = thickness / 1000;

      var weight = Math.PI * material * thickness * (diameter - thickness) * length * quantity;

      document.getElementById("result").innerHTML = "Weight of the pipe: " + weight.toFixed(2) + " kg";
    }