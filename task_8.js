const inputRef = document.querySelector('#controls input');
const parentDivRef = document.querySelector('#boxes');

const createBoxes = (amount) => {
    let total =
        parentDivRef.children.length > 0 ?
            Number.parseInt(parentDivRef.lastChild.style.width) + 10 :
            30
        ;
    
    let array = [];
    array.length = amount;
    
    const createDiv = [...array].map(el => {
        const childDivRef = document.createElement('div');

        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        
        childDivRef.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
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

const btnList = document.querySelectorAll('button');
// Использовал функцию из 4го задания по поиску кнопок
const getBtnByAttribute = (array, attribute) => {
    return [...array].find(btn => btn.dataset.action ===`${attribute}`);
}

const btnRendertRef = getBtnByAttribute(btnList, 'render');
btnRendertRef.addEventListener('click', () => createBoxes(inputRef.value));

const btnDestroyRef = getBtnByAttribute(btnList, 'destroy');
btnDestroyRef.addEventListener('click', destroyBoxes);