const sub= document.getElementById("submit")
sub.addEventListener("click",(event)=>{
 event.preventDefault()
 calculateWeight()
})

function calculateWeight() {
  var diameter = document.getElementById('diameter').value;
  var length = document.getElementById('length').value;
  var measurement = document.getElementById('measurement').value;
  var material = document.getElementById('material').value;
  var quantity = document.getElementById('quantity').value;

  

  // Convert diameter to millimeters if measurement is in meters
  if (measurement === 'm') {
    diameter *= 1000;
  }

  var weight = (Math.PI * Math.pow(diameter, 2) * length * material) / 4000000 * quantity; // Convert to kg

  console.log(weight)

  document.getElementById('result').textContent = 'Weight: ' + weight.toFixed(2) + ' kg';
}