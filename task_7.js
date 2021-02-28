const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

//Не обязательные значения
inputRef.min = 18;
inputRef.max = 38;
inputRef.step = 2;
inputRef.value = 22;


const changeSizeOfText = () => {
    return spanRef.style.fontSize = `${inputRef.value}px`;
}

inputRef.addEventListener('input', changeSizeOfText);