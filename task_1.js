"use strict";

const ulEl = document.querySelector('#categories');

const ulChildreListEl = ulEl.children;

function showNumberOfElements(arr) {
    let total = 0;

    [...arr].forEach(element => total += 1);

    return console.log(`В списке ${total} категории.`);
}
showNumberOfElements(ulChildreListEl);



const ulChildrenEl = ulEl.querySelectorAll('li.item');

console.dir(ulChildrenEl);

function show(arr) {
    const title = arr.querySelector('h2');
    return console.log(title);
}

show(ulChildrenEl);