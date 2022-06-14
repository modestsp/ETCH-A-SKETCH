const container = document.querySelector('.container')
const button = document.querySelector('button')
let size = 16

generate();


function generate() {
    for(let i = 1; i<= (size * size); i++) {
        const squareDiv = document.createElement('div')
        squareDiv.classList.toggle('squareDiv')
        container.appendChild(squareDiv)
        squareDiv.addEventListener('mouseover', e => {
            e.target.classList.add('hov')
        })
    } 
}

button.addEventListener('click', () => {
    size = parseInt(prompt('Enter new size'))
    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    const squareDiv = document.querySelectorAll('.squareDiv')
    squareDiv.forEach(div => {
        div.classList.remove('hov')
    })
   generate();
})

container.style.gridTemplateColumns = `repeat(${size},1fr)`
container.style.gridTemplateRows = `repeat(${size}, 1fr)`