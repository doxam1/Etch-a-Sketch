
const mainBoard = document.querySelector('.mainboard');

//page load with 64 squares for coloring.
appendSquares(8);
let squareAfterCreation = document.querySelectorAll('.square');
colorSquareOnMouseOver();


//a flag variable for on/off coloring the board on when mouse is clicked and move together.
let mouseClick = false;

//variable declaration for color, starts with white;
let color = 'white';

// function for coloring the squares on mouse hoover AND mouse is clicked, or only when clicked.
function colorSquareOnMouseOver () {
    squareAfterCreation.forEach(function (square) {
        square.addEventListener('mouseover', (e) => {
            e.preventDefault();
            if (e.buttons == 1) {
            mouseClick = true;
            colorSquare(e)}})           
        square.addEventListener('mouseup', (e) => {
            e.preventDefault()
            mouseClick = false;
            colorSquare(e)})
        square.onmousedown = (e) => {
            e.preventDefault()
            mouseClick = true;
            colorSquare(e)};
    })};

//variable declaration for all auto buttons. (will change the class going forward)
const btns = document.querySelectorAll('.btn');
//function for auto select with buttons.
btns.forEach(function(button) {
    button.addEventListener('click', function(){
        if (button.classList.contains('sixteen')) {
            appendSquares(4);
            squareAfterCreation = document.querySelectorAll('.square');
            colorSquareOnMouseOver();
        } else if (button.classList.contains('sixtyfour')) {
            appendSquares(8);
            squareAfterCreation = document.querySelectorAll('.square');
            colorSquareOnMouseOver();
        } else if (button.classList.contains('twohundredfiftysix')) {
            appendSquares(16);
            squareAfterCreation = document.querySelectorAll('.square');
            colorSquareOnMouseOver();
        } else if (button.classList.contains('randomColor')) {
            rainbowColoring = false;
            randomColor();
            button.style.background = color;
        } else if (button.classList.contains('white')) {
            rainbowColoring = false;
            color = 'white';
        } else if (button.classList.contains('black')) {
            rainbowColoring = false;
            color = 'black'
        } else if (button.classList.contains('reset')) {
            squareAfterCreation.forEach(function(square) {
                square.style.opacity = 1;
                square.style.backgroundColor ='black';
                squareAfterCreation = document.querySelectorAll('.square')
            })};
        });
        //why i can't put it here? :
        // colorSquareOnMouseOver();
    }); 


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

// rainbow color variables and listener.
let rainbowColoring = false;
rainbowColoringBtn = document.querySelector('.rainbow')
rainbowColoringBtn.addEventListener('click', () => {rainbowColoring = true});

//function for coloring the squares.
// mouseclick is a flag for coloring only when mouse is clicked and is moving over.
//added darkening affect using flags. 
function colorSquare (z) {
    if (mouseClick == true && rainbowColoring == true && darkeningFlag == false) {
         z.target.style.opacity = 1;
         z.target.style.background = '#' + (Math.floor(Math.random()*16777215).toString(16));
    } else if (mouseClick == true && darkeningFlag == true) {
        if (z.target.style.opacity > 0) z.target.style.opacity -= .1;
    } else if (mouseClick == true){
        if (darkeningFlag != true) z.target.style.opacity = 1;
        z.target.style.background = color;

    }
};

//function for random color generator
function randomColor(){
    color = '#' + (Math.floor(Math.random()*16777215).toString(16));
};

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


// darkening effect functions and variables.
// i used flags for this effect to work.
darkeningBtn = document.querySelector('.opacity');
darkeningBtn.addEventListener('click', function(e){
    e.target.classList.toggle('darkeningOff')
    e.target.classList.toggle('darkeningOn');
    if (e.target.classList.contains('darkeningOn')) darken();
    if (e.target.classList.contains('darkeningOff')) darkenOff();
})
let darkeningFlag = false;
function darken(){
    darkeningFlag = true;
  }
function darkenOff() {
    darkeningFlag = false;
  } 



