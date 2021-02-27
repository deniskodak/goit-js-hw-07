"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulEl = document.querySelector('#ingredients');

const makeLiEl = array => {
    return array.map(element => {

        const liEl = document.createElement('li');
        liEl.textContent = element;
        return liEl;
    });
}

const liList = makeLiEl(ingredients);
ulEl.append(...liList);