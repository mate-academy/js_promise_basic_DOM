'use strict';

function divMaker(result) {
  let cssClass = '';
  let innerText = '';

  if (result === 'success') {
    cssClass = 'message';
    innerText = 'Promise was resolved!';
  }

  if (result === 'error') {
    cssClass = 'error-message';
    innerText = 'Promise was rejected!';
  }

  return `<div class="${cssClass}">${innerText}</div>`;
}

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo')
    .addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => document.body
  .insertAdjacentHTML('afterbegin', divMaker('success'))
).catch(error => {
  throw error;
});

promise2.catch(() => document.body
  .insertAdjacentHTML('afterbegin', divMaker('error')));
