'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div class="message">Promise was resolved!</div>'
    );
  })
  .catch(error => alert(error));

promise2
  .catch(() => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div class="error-message">Promise was rejected!</div>'
    );
  });
