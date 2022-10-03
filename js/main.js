let color = 'black'
let click = true;


function populateGrid(size) {
    let grid = document.querySelector('.grid')
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover',colorSquare)
        square.style.backgroundColor = 'white'
        grid.insertAdjacentElement('beforeend', square)
    }
}

populateGrid(64)

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'
        populateGrid(input)
    } else {
        document.querySelector(".error").style.display = 'flex';
    }
}

function colorSquare() {
    if(click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color
        }
    }
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    let grid = document.querySelector('.grid')
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click
        if(click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring'
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring'
        }
    }
})