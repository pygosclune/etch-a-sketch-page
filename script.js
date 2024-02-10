const container = document.querySelector('.container');
const createGridButton = document.getElementById('create-grid');
const colorPicker = document.getElementById('color-picker');
const gridSize = document.getElementById('grid-size');
const gridSizeNumber = document.getElementById('grid-size-number');

let selectedColor = 'black';
let mouseDown = false;
let mode = 'color';

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
document.onload = createGrid();

colorPicker.addEventListener('change', function() {
    selectedColor = colorPicker.value;
});

createGridButton.addEventListener('click', () => {
    createGrid();
});

gridSize.addEventListener('input', () => {
    gridSizeNumber.innerHTML = gridSize.value;
})

function changeMode(desiredMode) {
    mode = desiredMode;
    document.querySelectorAll('.mode-button').forEach(button => button.classList.remove('selected'));
    document.getElementById(desiredMode + '-mode').classList.add('selected');
}

function clearGrid() {
    container.innerHTML = "";
    createGrid();
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'color') e.target.style.backgroundColor = selectedColor;
    else if (mode === 'rainbow') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else if (mode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
};

function createGrid() {
    const gridSize = parseInt(document.getElementById('grid-size').value);
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColor)
        
        container.appendChild(gridSquare);
    }
};