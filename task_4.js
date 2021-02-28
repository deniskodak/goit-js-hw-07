let counterValue = 0;

const spanRef = document.querySelector('#value');

function increment() {
    counterValue += 1;
    return spanRef.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    return spanRef.textContent = counterValue;
};

const btnList = document.querySelectorAll('button');

const getBtnByAttribute = (array, attribute) => {
    return [...array].find(btn => btn.dataset.action ===`${attribute}`);
}

const btnIncrementRef = getBtnByAttribute(btnList, 'increment');
btnIncrementRef.addEventListener('click', increment);

const btnDecrementRef = getBtnByAttribute(btnList, 'decrement');
btnDecrementRef.addEventListener('click', decrement);
