const container = document.querySelector('.container');
const createGridButton = document.getElementById('create-grid');

function changeColor(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  }


createGridButton.addEventListener('click', () => {
    const gridSize = parseInt(document.getElementById('grid-size').value);
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColor)

        container.appendChild(gridSquare);
    }
})