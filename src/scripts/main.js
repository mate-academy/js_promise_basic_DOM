'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`<div class="message">Promise was resolved!</div>`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`<div class="error-message">Promise was rejected!</div>`));
  }, 3000);
});

function AddElemBody(elem) {
  document.body.insertAdjacentHTML('afterbegin', elem);
}

promise1.then(data => {
  AddElemBody(data);
});

promise2.catch(data => {
  AddElemBody(data);
});
