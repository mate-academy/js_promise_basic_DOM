'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve(createDiv('Promise was resolved!'));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    () => reject(createDiv('Promise was rejected!', 'error-message')),
    3000
  );
});

promise1
  .then()
  .catch((err) => alert(err));

promise2
  .then((err) => alert(err))
  .catch();

function createDiv(text, classType = '') {
  body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="message ${classType}">
      ${text}
    </div>
  `
  );
};
