const inputRef = document.querySelector('input#validation-input');

//Добавление и удаление классов не прописано в тз, решил всеравно добавить
const makeInputBorder = () => {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.toggle('invalid');
        }

        return inputRef.classList.add('valid');
        
    }
    else {
        if (inputRef.classList.contains('valid')) {
        inputRef.classList.toggle('valid');
        }
        return inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener('change', makeInputBorder);
