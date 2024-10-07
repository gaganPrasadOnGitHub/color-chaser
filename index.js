const container = document.getElementById('boxesContainer');
const rowsInput = document.getElementById('rowsInput');
const squaresInput = document.getElementById('squaresInput');
const delayInput = document.getElementById('delayInput');
const rowsValue = document.getElementById('rowsValue');
const squaresValue = document.getElementById('squaresValue');
const delayValue = document.getElementById('delayValue');
const colorsList = ['#fc59a3', '#87c830', '#ffd400', '#fe7e0f', '#8e3ccb', '#ff3155', '#2daefd'];

let delay = 400;

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function resetColor(element) {
  element.style.background = '#222';
  element.style.boxShadow = 'none';
}

function getRandomColor() {
  return colorsList[Math.floor(Math.random() * colorsList.length)];
}

function generateGrid(rows, squares) {
  container.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('flex-center', 'row');
    for (let j = 0; j < squares; j++) {
      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', () => setColor(square));

      square.addEventListener('mouseout', () => {
        setTimeout(() => resetColor(square), delay);
      });

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

rowsInput.addEventListener('input', () => {
  let rows = parseInt(rowsInput.value);
  let squares = parseInt(squaresInput.value);
  rowsValue.textContent = rows;

  generateGrid(rows, squares);
});

squaresInput.addEventListener('input', () => {
  let squares = parseInt(squaresInput.value);
  let rows = parseInt(rowsInput.value);
  squaresValue.textContent = squares;

  generateGrid(rows, squares);
});

delayInput.addEventListener('input', () => {
  delay = parseInt(delayInput.value);
  delayValue.textContent = delay;
});

generateGrid(parseInt(rowsInput.value), parseInt(squaresInput.value));
