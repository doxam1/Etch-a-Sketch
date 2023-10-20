const mainBoard = document.querySelector('.mainboard');

const btnSixteen = document.querySelector('.sixteen')

appendSquares(8);

let squareAfterCreation = document.querySelectorAll('.square');

squareAfterCreation.forEach(function (square) {
    square.addEventListener('mouseover', colorSquare);
});

const btns = document.querySelectorAll('.btn');

btns.forEach(function(button) {
    button.addEventListener('click', function(){
        if (button.classList.contains('sixteen')) {
            appendSquares(4);
            squareAfterCreation = document.querySelectorAll('.square');
        } else if (button.classList.contains('sixtyfour')) {
            appendSquares(8);
            squareAfterCreation = document.querySelectorAll('.square');
        } else if (button.classList.contains('twohundredfiftysix')) {
            appendSquares(16);
            squareAfterCreation = document.querySelectorAll('.square');
        }
        squareAfterCreation.forEach(function (square) {
         square.addEventListener('mouseover', colorSquare);
        });
    })
    
})

function appendSquares (duplicates) {
    mainBoard.innerHTML = ''
    for (let i=0;i < duplicates*duplicates; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = (400 / duplicates) + 'px'
        square.style.height = (400 / duplicates) + 'px'
        mainBoard.appendChild(square);
    }
}

function colorSquare (e) {
    if (e.target.style.background == 'white') {
        e.target.style.background = 'black';
    } else {
    e.target.style.background = 'white';
    }
}
