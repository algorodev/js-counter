const counterValue = document.getElementById('counter-value')
const decreaseButton = document.getElementById('decrease-button')
const increaseButton = document.getElementById('increase-button')
const resetButton = document.getElementById('reset-button')

let counter = 0

decreaseButton.addEventListener('click', () => onDecreaseButtonClick())
increaseButton.addEventListener('click', () => onIncreaseButtonClick())
resetButton.addEventListener('click', () => onResetButtonClick())

const onDecreaseButtonClick = () => {
    counter -= 1
    counterValue.textContent = counter
}

const onIncreaseButtonClick = () => {
    counter += 1
    counterValue.textContent = counter
}

const onResetButtonClick = () => {
    counter = 0
    counterValue.textContent = counter
}
