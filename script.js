
const mainBoard = document.querySelector('.mainboard');

//page load with 64 squares for coloring.
appendSquares(8);
let squareAfterCreation = document.querySelectorAll('.square');
colorSquareOnMouseOver();


//a flag variable for on/off coloring the board on when mouse is clicked and move together.
let mouseClick = false;

// function for coloring the squares on mouse hoover AND mouse is clicked, or only when clicked.
function colorSquareOnMouseOver () {
    squareAfterCreation.forEach(function (square) {
        square.addEventListener('mouseover', (e) => {
            e.preventDefault();
            if (e.buttons == 1) {
            mouseClick = true;
            colorSquare(e)}})
        square.addEventListener('mouseup', (e) => {
            mouseClick = false;
            colorSquare(e)})
        square.onmousedown = (e) => {
            mouseClick = true;
            colorSquare(e)};
    })};

// function colorSquareOnClick () {
//     squareAfterCreation.forEach(function (square) { 
//         square.addEventListener('mousedown', (e) => {
//             if (e.button == 0) {
//             mouseClick = true;
//             colorSquare(e);
//       }})
//         square.addEventListener('mouseup', (e) => {
//             mouseClick = false;
//             colorSquare(e);
//         })
//     })};


//variable declaration for all auto buttons. (will change the class going forward)
const btns = document.querySelectorAll('.btn');
//function for auto select with buttons.
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
        colorSquareOnMouseOver ();
    })  
})

//function for building the squares div.
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

//function for coloring the squares.
// mouseclick is a flag for coloring only when mouse is clicked and is moving over.
function colorSquare (z) {
    if (mouseClick == true) {
    if (z.target.style.background == 'white') {
        z.target.style.background = 'black';
    } else {
    z.target.style.background = 'white';
    }
}};
// variable for manual input
const manualInputBtn = document.querySelector('.manualInputBtn');
const manualInput = document.querySelector('#manualInput')

// event listeners for click on apply button, and enter key on input manual.
manualInputBtn.addEventListener('click', manualInputSubmit);
manualInput.addEventListener('keydown' , function(e) {
    if (e.keyCode === 13 || e.key === 'Enter') manualInputSubmit(); 
});

//function for manual input, user choose how many squares.
function manualInputSubmit () {
    if (parseInt(manualInput.value) > 100 || isNaN(parseInt(manualInput.value))) {
        const error = document.createElement('div');
        error.textContent = 'please enter a number (max 100)'
        error.style.color = 'white';
        manualInput.parentNode.insertBefore(error, manualInput);
        setTimeout(() => {
            manualInput.parentNode.removeChild(error); 
        }, 1000);
    } else {
    const userManualSelect = parseInt(manualInput.value);
    appendSquares(userManualSelect);
    squareAfterCreation = document.querySelectorAll('.square')
    colorSquareOnMouseOver();
    }
};
