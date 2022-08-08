
//get display area of calculator
const display = document.getElementById('display');

// const current = '';
// let toAdd = '';


const clearButton = document.getElementById('clears');
clearButton.addEventListener('click', e => {
    e.preventDefault();
    display.innerText = '';
})


//get all buttons as a nodelist
const buttons = document.querySelectorAll('.buttons');

//add event listener on all buttons from nodelist
for (const button of buttons) {
    button.addEventListener('click', e => {
        e.preventDefault();
        let toAdd = button.value;
        let current = display.innerText;
        display.innerText = current.concat(toAdd);
    })
}


// basic math functions
function add(x, y) {
    let sum = x + y;
    console.log(`${x} + ${y} = `, sum)
    return sum;
}

function subtract(x, y) {
    let difference = x - y;
    console.log(`${x} - ${y} = `, difference)
    return difference;
}

function multiply(x, y) {
    let product = x * y;
    console.log(`${x} * ${y} = `, product)
    return product;
}

function divide(x, y) {
    let quotient = x / y;
    console.log(`${x} / ${y} = `, quotient)
    return quotient;
}

//function to perform the math functions
function operate(operator, x, y) {
    if ( operator === '+') {
        add(x, y);
    } else if ( operator === '-') {
        subtract(x, y);
    } else if ( operator === '*') {
        multiply(x, y);
    } else if ( operator === '/') {
        divide(x, y);
    }
    
}

operate('+', 5, 5);
operate('-', 5, 5);
operate('*', 5, 5);
operate('/', 5, 5);