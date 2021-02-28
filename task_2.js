"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulRef = document.querySelector('#ingredients');

const makeLiRef = array => {
    return array.map(element => {

        const liRef = document.createElement('li');
        liRef.textContent = element;
        return liRef;
    });
}

const liList = makeLiRef(ingredients);
ulRef.append(...liList);