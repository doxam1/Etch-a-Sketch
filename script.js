const mainBoard = document.querySelector('.mainboard');

function appendSquares (duplicates) {
    mainBoard.innerHTML = ''
    for (let i=1;i <= duplicates*duplicates; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = (400 / duplicates) + 'px'
        square.style.height = (400 / duplicates) + 'px'
        mainBoard.appendChild(square);
    }
}

appendSquares(4);
