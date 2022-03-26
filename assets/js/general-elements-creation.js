const body = document.body

// funzione per creare gli elementi della pagina
function createGeneralElement(tagHtml, className, content) {
    const newElement = document.createElement(tagHtml)
    newElement.innerHTML = content
    newElement.classList.add(className)
    newElement.setAttribute('id', className)
    body.appendChild(newElement)
}

// Elementi generati
createGeneralElement('div', 'counter','')