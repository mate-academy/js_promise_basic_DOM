'use strict';

const logoIkon = document.querySelector('.logo');
const root = document.body;
const textSucces = 'Promise was resolved!';
const textNotSucces = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logoIkon.addEventListener('click', () => {
    resolve(textSucces);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(textNotSucces)), 3000);
});

promise1.then(result =>
  root.insertAdjacentHTML('afterbegin', `
    <div class="message">${textSucces}</div>
  `)
);

promise2.then().catch(error =>
  root.insertAdjacentHTML('afterbegin', `
    <div class="error-message">${error}</div
  `)
);
