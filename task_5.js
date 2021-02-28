const inputRef = document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');

const makeMassage = () => {
    return spanRef.textContent = inputRef.value.length > 0 ? inputRef.value : 'незнакомец';
}

inputRef.addEventListener('input', makeMassage);