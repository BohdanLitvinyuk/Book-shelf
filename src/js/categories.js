import { getQuery } from './hero';
import { container as bookCard } from './hero';
import { markup } from './hero';
import chekedImg from '../images/choosed.png';

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const categoryList = document.querySelector('.category-list');
const axios = require('axios').default;
const btn = document.querySelector('.container-books');

btn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  let btn = event.target.dataset.catname;

  const itemEl = Array.from(categoryList.querySelectorAll('li'));

  const findElem = itemEl.find(li => li.innerText === btn);
  const allCat = itemEl.find(
    li => li.innerText.toLowerCase() === `all categories`
  );

  if (findElem) {
    allCat.classList.remove('categories__title-active');
    findElem.classList.add('categories__title-active');
  }
  return;
}

categoryList.addEventListener('click', onCategoryListClick);

getCategoryList();

async function getCategoryList() {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category-list`
    );
    renderCategory(response.data);
  } catch (error) {
    Notify.warning("Sorry, failed to load information");
  }
}

function renderCategory(data) {
  let markup = data
    .map(
      ({ list_name }) => `<li class = "category-list-item"> ${list_name} </li>`
    )
    .join('');
  markup = `<li class = "category-list-item"> All Categories </li>` + markup;
  categoryList.innerHTML = markup;
}

function onCategoryListClick(event) {
  const idElem = event.target;
  const elem = document.querySelector('.categories__title-active');

  if (idElem.tagName !== 'LI') {
    return;
  } else if (elem) {
    elem.classList.remove('categories__title-active');
  }
  event.target.classList.add('categories__title-active');

  if (idElem.textContent.trim() === 'All Categories') {
    bookCard.innerHTML = '';
    return getQuery();
  }
  getBookByCategory(idElem.textContent.trim());
}

export async function getBookByCategory(changeCategory) {
  await axios
    .get(
      `https://books-backend.p.goit.global/books/category?category=${changeCategory}`
    )
    .then(({ data }) => renderedBookCardItem(data));
}

export function getGhoosedBooks() {
  const choosedBooks = JSON.parse(localStorage.getItem('savedBooks'));
  return choosedBooks.map(el => el._id);
}

function renderedBookCardItem(data) {

  const dataCheck = data.map(el => {
    if (getGhoosedBooks().includes(el._id)) el.choosed = 1;
    else el.choosed = 0;
    return el;
  });

  const markup = `
    <h2 class ="main-title">${data[0].list_name}</h2>
    <ul class="book-list">${dataCheck
      .map(
        ({ author, book_image, title, _id, choosed }) =>
          `<li class="bs-list-item">
          <div class="book-card " data-id="${_id}">
            <img class="choosed-icon js-ct ${isChoosed(
              choosed
            )}" src="${chekedImg}" alt="icon" width="25" >
    <div class="image-overlay" >
    <img class="book-img js-ct" src="${book_image}" alt="${title}" loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${title}</h3>
    <p class="book-author js-ct"> ${author}</p>
    </div>
    </li>`
      )
      .join('')}
    </ul>
     `;
  bookCard.innerHTML = markup;
  const titleElement = document.querySelector('.main-title');
  const titleText = titleElement.textContent;
  const words = titleText.split(' ');
  const lastWord = words[words.length - 1];
  titleElement.innerHTML = titleText.replace(
    lastWord,
    `<span class="brendcolor">${lastWord}</span>`
  );
}

export function isChoosed(idx) {
  if (!idx) return 'visually-hidden';
  else return null;
}
