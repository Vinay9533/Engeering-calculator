function calculateShear() {
  // Get input values
  var springConstant = parseFloat(document.getElementById("springConstant").value);
  var initialReading = parseFloat(document.getElementById("initialReading").value);
  var finalReading = parseFloat(document.getElementById("finalReading").value);
  

  // Perform calculations
  var shearStress = springConstant * (finalReading - initialReading)/180;

  // display the result
  document.getElementById("result").innerHTML = "Shear Strength: " + shearStress + "kg/cm" ;

}
function calculateCohesion() {
  // Get input values
  var springConstant = parseFloat(document.getElementById("springConstant").value);
  var initialReading = parseFloat(document.getElementById("initialReading").value);
  var finalReading = parseFloat(document.getElementById("finalReading").value);
  var vaneDiameter = parseFloat(document.getElementById("vaneDiameter").value);
  var vaneHeight = parseFloat(document.getElementById("vaneHeight").value);

  // calculate the input values
  var a=vaneDiameter/6;
  var b=vaneHeight/2;
  var c=(3.144)(vaneDiameter)(vaneDiameter);
  var shearStress = springConstant * (finalReading - initialReading)/180;
  var Cohesion=shearStress/(c*a*b);
  // Display the result
  document.getElementById("result").innerHTML="Cohesion:" + Cohesion + "kg/cm";
}