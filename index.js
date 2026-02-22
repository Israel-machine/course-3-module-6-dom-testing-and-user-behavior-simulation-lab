const addElementToDOM = (elementId, string) => {
    const content = document.getElementById(elementId)
    content.textContent = string
}

const removeElementFromDOM = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
        element.remove()
    }
}

const simulateClick = (elementId, string) => {
    const element = document.getElementById(elementId)
    element.textContent = string
}

const handleFormSubmit = (formId, elementId) => {
    const input = document.getElementById('user-input')
    const targetElement = document.getElementById(elementId)
    const errorMessage = document.getElementById('error-message')

    const value = input.value.trim()

    if (!value) {
        errorMessage.textContent = 'Input cannot be empty'
        errorMessage.classList.remove('hidden')
        return
    }

    targetElement.textContent = value
    errorMessage.classList.add('hidden')
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-form').addEventListener('submit', (event) => {
        event.preventDefault()
        handleFormSubmit('user-form', 'dynamic-content')
    })
})

module.exports = { 
    addElementToDOM, 
    removeElementFromDOM, 
    simulateClick, 
    handleFormSubmit 
};