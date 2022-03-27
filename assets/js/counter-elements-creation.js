// Counter - getted element
const counterMainDiv = document.getElementById('counter')

// Counter - function for insert elements inside the counter
function addElementInsideCounter(tagHtml, className, content) {
    const counterNewElement = document.createElement(tagHtml)
    counterNewElement.innerHTML = content
    counterNewElement.classList.add(className)
    counterNewElement.setAttribute('id', className)
    counterMainDiv.appendChild(counterNewElement)
}

// Counter - Elements inside div "Counter"
addElementInsideCounter('div', 'display-number', '0')
addElementInsideCounter('div', 'button-container', '')
addElementInsideCounter('div', 'counter-name-container', '')

// Counter's name section - getted element
const counterNameSection = document.getElementById('counter-name-container')

// Counter's name section - function for insert elements inside this section
function addElementInsideCounterNameSection(tagHtml, className, content) {
    const counterNameSectionNewElement = document.createElement(tagHtml)
    counterNameSectionNewElement.innerHTML = content
    counterNameSectionNewElement.classList.add(className)
    counterNameSectionNewElement.setAttribute('id', className)
    counterNameSection.appendChild(counterNameSectionNewElement)
}

// Counter's name section - elements inside this section
addElementInsideCounterNameSection('h1', 'counter-title', 'Simple counter')


// Button's container - getted element
const buttonSection = document.getElementById('button-container')

// Button's container - function for insert elements inside button's container
function addElementInsideCounterButtonSection(tagHtml, className, content) {
    const buttonSectionNewElement = document.createElement(tagHtml)
    buttonSectionNewElement.innerHTML = content
    buttonSectionNewElement.classList.add(className)
    buttonSectionNewElement.setAttribute('id', className)
    buttonSection.appendChild(buttonSectionNewElement)
}

// Button's container - elements inside button button's container
addElementInsideCounterButtonSection('button', 'button-increment', '+')
addElementInsideCounterButtonSection('button', 'button-reset', 'reset')
addElementInsideCounterButtonSection('button', 'button-decrement', '-')