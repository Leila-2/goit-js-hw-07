const decrement = document.querySelector('#counter button[data-action="decrement"]')
const increment = document.querySelector('#counter button[data-action="increment"]')
const value = document.querySelector('#value')

let countVal = 0;

function onDecrementBtn() {
    value.textContent = countVal -= 1
}
function onIncrementBtn() {
    value.textContent = countVal += 1
}
decrement.addEventListener('click', onDecrementBtn);

increment.addEventListener('click', onIncrementBtn);

