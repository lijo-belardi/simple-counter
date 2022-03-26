// Counter - manipolazione DOM
const counterDiv = document.getElementById('counter')

// Counter - funzione per aggiungere elementi all'interno del counter
function addElementInsideCounter(tagHtml, className, content) {
    const counterNewElement = document.createElement(tagHtml)
    counterNewElement.innerHTML = content
    counterNewElement.classList.add(className)
    counterNewElement.setAttribute('id', className)
    counterDiv.appendChild(counterNewElement)
}

// Counter - Elementi dentro il div "Counter"
addElementInsideCounter('div', 'display-number', '0')
addElementInsideCounter('div', 'button-container', '')
addElementInsideCounter('div', 'counter-name-container', '')


const buttonSection = document.getElementById('button-container')

function addElementInsideCounterButtonSection(tagHtml, className, content) {
    const buttonSectionNewElement = document.createElement(tagHtml)
    buttonSectionNewElement.innerHTML = content
    buttonSectionNewElement.classList.add(className)
    buttonSectionNewElement.setAttribute('id', className)
    buttonSection.appendChild(buttonSectionNewElement)
}


addElementInsideCounterButtonSection('button', 'button-increment', '+')
addElementInsideCounterButtonSection('button', 'button-reset', 'reset')
addElementInsideCounterButtonSection('button', 'button-decrement', '-')


const counterNameSection = document.getElementById('counter-name-container')

function addElementInsideCounterNameSection(tagHtml, className, content) {
    const counterNameSectionNewElement = document.createElement(tagHtml)
    counterNameSectionNewElement.innerHTML = content
    counterNameSectionNewElement.classList.add(className)
    counterNameSectionNewElement.setAttribute('id', className)
    counterNameSection.appendChild(counterNameSectionNewElement)
}

addElementInsideCounterNameSection('h1', 'counter-title', 'Simple counter')