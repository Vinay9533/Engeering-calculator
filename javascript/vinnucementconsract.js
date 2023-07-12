function calculateConcrete() {
  // Get the input values
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const thickness = parseFloat(document.getElementById('thickness').value);

  // Check if the input values are valid
  if (isNaN(length) || isNaN(width) || isNaN(thickness) || length <= 0 || width <= 0 || thickness <= 0) {
    document.getElementById('result').textContent = 'Please enter valid input values.';
    return;
  }

  // Calculate the volume of concrete
  const volume = length * width * thickness;

  // Display the result
  document.getElementById('result').textContent = `Volume of Concrete: ${volume.toFixed(2)} cubic meters`;
};