function calculatePermeability() {
    const D = parseFloat(document.getElementById('diameter').value);
    const L = parseFloat(document.getElementById('length').value);

    const h1 = parseFloat(document.getElementById('head1').value);
    const Q1 = parseFloat(document.getElementById('volume1').value);
    const t1 = parseFloat(document.getElementById('duration1').value);

    const h2 = parseFloat(document.getElementById('head2').value);
    const Q2 = parseFloat(document.getElementById('volume2').value);
    const t2 = parseFloat(document.getElementById('duration2').value);

    const h3 = parseFloat(document.getElementById('head3').value);
    const Q3 = parseFloat(document.getElementById('volume3').value);
    const t3 = parseFloat(document.getElementById('duration3').value);

    const A = 78.54;
    const I = 1.00;

    const k1 = (Q1 / t1) * (L / h1) * I / A;
    const k2 = (Q2 / t2) * (L / h2) * I / A;
    const k3 = (Q3 / t3) * (L / h3) * I / A;

    const averagePermeability = (k1 + k2 + k3) / 3;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <h3>Results</h3>
      <p>Test 1: ${k1.toFixed(2)}</p>
      <p>Test 2: ${k2.toFixed(2)}</p>
      <p>Test 3: ${k3.toFixed(2)}</p>
      <p>Average Permeability: ${averagePermeability.toFixed(2)}</p>
    `;
  }