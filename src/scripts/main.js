'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

function success() {
  document.body.innerHTML += `<div class="message">Promise was resolved!</div>`;
}

function fail() {
  document.body.innerHTML += `<div class="message error-message">Promise was rejected!</div>`;
}

promise1.then(success).catch(fail);
promise2.then(success).catch(fail);
