const container = document.querySelector('.container')
let size = 16
for (let i = 1; i <= (size * size); i++ ) {
    const div = document.createElement('div')
    div.classList.toggle('squareDiv')
    div.addEventListener('mouseover', e => {
        e.target.classList.add('hov')
    })
    container.appendChild(div);
}

