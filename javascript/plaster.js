function calculatePlaster(event) {
  event.preventDefault();

  // Get user inputs
  const unit = document.getElementById("unit").value;
  const plasterType = document.getElementById("plasterType").value;
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const footingGrade = document.getElementById("footingGrade").value;

  // Perform calculations
  let area;

  if (unit === "ft") {
    area = (length * width) / 10.764; // Convert ft² to m²
  } else if (unit === "inch") {
    area = (length * width) / 144; // Convert inch² to m²
  } else if (unit === "cm") {
    area = (length * width) / 10000; // Convert cm² to m²
  } else {
    area = length * width;
  }

  // Display results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Area: ${area.toFixed(2)} m² (${(area * 10.764).toFixed(2)} ft²)</p>
  `;
}