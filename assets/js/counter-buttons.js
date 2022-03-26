let incrementButton = document.getElementById('button-increment')
let decrementButton = document.getElementById('button-decrement')
let resetButton = document.getElementById('button-reset')
let displayNumber = document.getElementById('display-number');
let counter = 0;

incrementButton.addEventListener('click', incrementCounter)
decrementButton.addEventListener('click', decrementCounter)
resetButton.addEventListener('click', resetCounter)

function incrementCounter() {
    counter += 1;
    displayNumber.innerHTML = counter;
}

function decrementCounter() {
    counter -= 1;
    displayNumber.innerHTML = counter;
}

function resetCounter() {
    counter = 0;
    displayNumber.innerHTML = counter;
}
