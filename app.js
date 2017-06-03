const calc = require('./calc');

const n1El = document.getElementById('n1');
const n2El = document.getElementById('n2');
const resultEl = document.getElementById('result');
const versionEl = document.getElementById('version');

versionEl.textContent = `VERSION: "${VERSION}" COMMITHASH: "${COMMITHASH}" BRANCH: "${BRANCH}"`;


const execOperation = (operation) => {
  const n1 = parseInt(n1El.value);
  const n2 = parseInt(n2El.value);
  resultEl.textContent = operation(n1, n2);
}
const applyOperation = (elementId, operation) => {
  document
    .getElementById(elementId)
    .addEventListener("click", function() {
      execOperation(operation)
    });
}
applyOperation("sumBtn", calc.sum);
applyOperation("subBtn", calc.sub);
applyOperation("multBtn", calc.mult);
applyOperation("divBtn", calc.div);