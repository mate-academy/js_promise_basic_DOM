'use strict';

const logoIkon = document.querySelector('.logo');
const root = document.body;
const textSucces = 'Promise was resolved!';
const textNotSucces = 'Promise was rejected!';

logoIkon.addEventListener('click', () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve(textSucces);
  });

  promise1.then(result => {
    root.insertAdjacentHTML('beforeend', `
      <div class="message">${result}</div>
    `);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(textNotSucces)), 3000);
});

promise2.catch(error =>
  root.insertAdjacentHTML('beforeend', `
    <div class="error-message">${error}</div
  `)
);
