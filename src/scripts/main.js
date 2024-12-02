'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

function renderS() {
  const markupSuccess = `
    <div class="message">
      <span>Promise was resolved!</span>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', markupSuccess);
}

function renderE() {
  const markupError = `
    <div class="message error-message">
      <span>Promise was rejected!</span>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', markupError);
}

promise1.then(renderS).catch(renderE);
promise2.then(renderS).catch(renderE);
