const container = document.querySelector('.container')
for (let i = 0; i <= 255; i++ ) {
    const div = document.createElement('div')
    div.classList.toggle('squareDiv')
    div.addEventListener('mouseover', e => {
        e.target.classList.add('hov')
    })
    container.appendChild(div);
}

