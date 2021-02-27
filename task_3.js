const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulRef = document.querySelector('#gallery');
const makeGalleryImage = ({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}"></li>`;
}

const makeGalleryImageList = images.map(makeGalleryImage).join('');

console.log(makeGalleryImageList);

ulRef.insertAdjacentHTML('beforeend', makeGalleryImageList);

ulRef.classList.add('gallery-list');

const liList = ulRef.querySelectorAll('li');
const liRef = [...liList].map(el => {
    el.classList.add('gallery-list__item');
    const img = el.querySelector('img').classList.add('gallery-list__img');
}