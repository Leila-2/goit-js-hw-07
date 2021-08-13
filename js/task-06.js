const input = document.querySelector('#validation-input')
const validation = Number(input.getAttribute("data-length"))


function checkInpValue(event) {
    const valueLength = event.target.value.length
    if (validation === valueLength) {
        input.setAttribute('class', 'valid');
    }
    else {

        input.setAttribute('class', 'invalid');
    }
}

input.addEventListener('blur', checkInpValue)
