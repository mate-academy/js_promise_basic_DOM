'use strict';

// write your code here
const target = document.querySelector('.logo');
const rootElement = document.querySelector('body');

const firstPromise = new Promise((resolve) =>
  target.addEventListener('click', () => {
    const msg = `
      <div class="message">
        Promise was resolved!
      </div>
    `;

    resolve(msg);
  }));

const secondPromise = new Promise((resolve, reject) =>
  target.addEventListener('click', () => {
    const msgError = `
      <div class="error-message message">
        Promise was rejected!
      </div>
    `;

    setTimeout(() => reject(msgError), 3000);
  }));

firstPromise.then((msg) => rootElement
  .insertAdjacentHTML('afterbegin', msg));

secondPromise.catch((msgError) => rootElement
  .insertAdjacentHTML('beforeend', msgError));
