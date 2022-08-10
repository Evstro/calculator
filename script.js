
//get display area of calculator
const display = document.getElementById('display');

//get clear button on calcultor
const clearButton = document.getElementById('clears');

function clearStrings(x, y, operator) {
    x = '';
    y = '';
    operator = '';
    return x, y, operator;
}
//add event listener that clears display when pressed
clearButton.addEventListener('click', e => {
    e.preventDefault();
    display.innerText = '';
    clearStrings(x, y, operator)
})

let x = '';
let y = '';
let operator = '';

class NewValueInString {
    constructor(buttonValue) {
        this.buttonValue = buttonValue;
    }
    constructX(x) {
        return x.concat(this.buttonValue)
    }
    constructY(y) {
        return y.concat(this.buttonValue)
    }
    constructOperator(operator) {
        return this.buttonValue
    }
}

//get number buttons as a nodelist
const numbbuttons = document.querySelectorAll('.numbbuttons');
//add event listener on all buttons from nodelist
for (const number of numbbuttons) {
    number.addEventListener('click', e => {
        e.preventDefault();
        //variable to take the value of the button
        let buttonValue = number.value;
        //variable to get the current display text
        let current = display.innerText;
        setDisplay(current, buttonValue);
        if (operator === '') {
            x = new NewValueInString(buttonValue).constructX(x);
        } else {
            y = new NewValueInString(buttonValue).constructY(y);
        }  
        
        console.log('x: ', x);
        console.log('y: ', y);
        console.log('operator: ', operator)
        
        // if (button.value = '+' || '-'|| '*' || '/') {
        //     let operator = button.value;
        //     console.log('operator: ', operator)
        // }
        
    })
}

//get operator buttons as a nodelist
const opbuttons = document.querySelectorAll('.opbuttons');
//add event listener on operator buttons from nodelist
for (const opButton of opbuttons) {
    opButton.addEventListener('click', e => {
        e.preventDefault();
        let buttonValue = opButton.value;
        let current = display.innerText;
        setDisplay(current, buttonValue);
        operator = new NewValueInString(buttonValue).constructOperator(operator);
        console.log('x: ', x);
        console.log('y: ', y);
        console.log('operator: ', operator)
        return operator;
    })
}

const equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', e => {
    e.preventDefault();
    operate(operator, x, y);
})

//set display function
function setDisplay(current, buttonValue) {

    //sets html display to the previous variables with concat
    display.innerText = current.concat(buttonValue);
}

// basic math functions
function add(x, y) {
    let sum = Number(x) + Number(y);
    console.log(`${x} + ${y} = `, sum)
    display.innerText = sum;
    return sum;
}

function subtract(x, y) {
    let difference = x - y;
    console.log(`${x} - ${y} = `, difference)
    display.innerText = difference;
    return difference;
}

function multiply(x, y) {
    let product = x * y;
    console.log(`${x} * ${y} = `, product)
    display.innerText = product;
    return product;
}

function divide(x, y) {
    let quotient = x / y;
    console.log(`${x} / ${y} = `, quotient)
    display.innerText = quotient;
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

