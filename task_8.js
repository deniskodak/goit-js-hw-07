const inputRef = document.querySelector('#controls input');
const parentDivRef = document.querySelector('#boxes');

const createBoxes = (amount) => {
    let total = 30;
    
    let array = [];
    array.length = amount;
    
    const createDiv = [...array].map(el => {
        const childDivRef = document.createElement('div');
        childDivRef.style.width = `${total}px`;
        childDivRef.style.height = childDivRef.style.width;

        total += 10;
        
        return childDivRef;
    });
    
    return parentDivRef.append(...createDiv);
}

const destroyBoxes = () => {
    return parentDivRef.innerHTML = '';
}

const getInputValue = () => {
    return console.log(inputRef.value);
}

const btnList = document.querySelectorAll('button');

const getBtnByAttribute = (array, attribute) => {
    return [...array].find(btn => btn.dataset.action ===`${attribute}`);
}


inputRef.addEventListener('input', getInputValue);


const btnRendertRef = getBtnByAttribute(btnList, 'render');
btnRendertRef.addEventListener('click', createBoxes(inputRef.value));

const btnDestroyRef = getBtnByAttribute(btnList, 'destroy');
btnDestroyRef.addEventListener('click', destroyBoxes);

