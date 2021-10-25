'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const firstPromise = new Promise((resolve) =>
  logo.addEventListener('click', () => {
    resolve(`
    <div class="message">
      Promise was resolved!
    </div>
  `);
  }));

const secondPromise = new Promise((resolve, reject) => {
  const msg = `
    <div class="error-message message">
      Promise was rejected!
    </div>
  `;

  reject(msg);
});

firstPromise.then((resolve) => body.insertAdjacentHTML('afterbegin', resolve));

setTimeout(() => secondPromise.catch((reject) =>
  body.insertAdjacentHTML('beforeend', reject)), 3000);
