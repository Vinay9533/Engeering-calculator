// Calculate the weight of T-profile
function calculateWeight() {
    const dimensionA = parseFloat(document.getElementById('dimensionA').value);
    const dimensionB = parseFloat(document.getElementById('dimensionB').value);
    const thickness = parseFloat(document.getElementById('thickness').value);
    const length = parseFloat(document.getElementById('length').value);
    const material = parseFloat(document.getElementById('material').value);
  
    const weight = ((dimensionA + dimensionB - thickness) * thickness * length * material) / 1000000; // Calculate weight in kg
  
    return weight.toFixed(2); // Return weight rounded to 2 decimal places
  }
  
  // Handle the calculate button click event
  document.getElementById('calculateButton').addEventListener('click' , function(){
    const weight = calculateWeight();
    document.getElementById('result').textContent = `Weight: ${weight} kg`;
  });