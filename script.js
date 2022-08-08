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