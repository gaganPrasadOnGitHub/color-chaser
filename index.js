const container = document.getElementById('container');
const colorsList = ['#fc59a3', '#87c830', '#ffd400', '#fe7e0f', '#8e3ccb', '#ff3155', '#2daefd'];

const delay = 4000;
const squares = 20;
const rows = 20;

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
