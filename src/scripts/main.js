'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

function showSuccessMessage() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="message">Promise was resolved!</div>',
  );
}

function showErrorMessage() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="message error-message">Promise was rejected!</div>',
  );
}

promise1.then(showSuccessMessage).catch(showErrorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then(showSuccessMessage).catch(showErrorMessage);
