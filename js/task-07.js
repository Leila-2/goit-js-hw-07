const input = document.querySelector('#font-size-control')
const text = document.querySelector("#text")

function changeTextSize(event) {

    text.style.fontSize = `${event.target.value}px`
}
input.addEventListener('input', changeTextSize)