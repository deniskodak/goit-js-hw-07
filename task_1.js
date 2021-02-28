"use strict";

const ulRef = document.querySelector('#categories');

const ulChildreList = ulRef.children;

function showNumberOfElements(arr) {
    let total = 0;

    [...arr].forEach(element => total += 1);

    return console.log(`В списке ${total} категории.`);
}
showNumberOfElements(ulChildreList);



const ulChildrenRef = ulRef.querySelectorAll('li.item');
const showTitleAndNumberOfElements = arr => {
    return [...arr].forEach(item => {
        const titleRef = item.querySelector('h2');
        const ulRef = item.querySelector('ul');
        console.log(`Категория: ${titleRef.textContent}`);
        console.log(`Количество элементов: ${ulRef.children.length}`);
    })
}
showTitleAndNumberOfElements(ulChildrenRef);