'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const revolvedMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';

const printSuccesMessage = () => {
  body.insertAdjacentHTML('beforeend', `<div class="message">
    ${revolvedMessage}
  </div>`);
};

const printErrorMessage = () => {
  body.insertAdjacentHTML('beforeend', `<div class="message error-message">
    ${errorMessage}
  </div>`);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(printSuccesMessage());
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(printErrorMessage());
  }, 3000);
});

promise1();
promise2();
