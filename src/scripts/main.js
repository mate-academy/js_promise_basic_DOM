'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

function onSuccess() {
  document.body.innerHTML = `
    <div class="message">Promise was resolved!</div>
  `;
}

function onError() {
  document.body.innerHTML = `
    <div class="error-message">Promise was rejected!</div>
  `;
}

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);
