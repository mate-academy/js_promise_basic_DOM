'use strict';

// write your code here
const logo = document.querySelector('.logo');

function success() {
  document.body.insertAdjacentHTML('beforeend', `
   <div class="message">Promise was resolved!</div>`);
}

function error() {
  setTimeout(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="error-message">Promise was rejected!</div>`);
  }, 3000);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(success());
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(error(), 3000);
});

promise1.finally(success);
promise2.finally(error);
