function calculateSump() {
  // Get the input values
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const depth = parseFloat(document.getElementById('depth').value);

  // Check if the input values are valid
  if (isNaN(length) || isNaN(width) || isNaN(depth) || length <= 0 || width <= 0 || depth <= 0) {
    document.getElementById('result').textContent = 'Please enter valid input values.';
    return;
  }

  // Calculate the volume of the water sump/tank
  const volume = length * width * depth;

  // Display the result
  document.getElementById('result').textContent = `Volume of Water Sump/Tank: ${volume.toFixed(2)} cubic meters`;
}
