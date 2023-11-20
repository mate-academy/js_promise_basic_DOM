'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function handleSuccess() {
  const successDiv = document.createElement('DIV');

  successDiv.classList.add('message');
  successDiv.innerText = 'Promise was resolved!';
  body.appendChild(successDiv);
}

function handleError() {
  body.insertAdjacentHTML(
    'afterend',
    '<div class="message error-message">Promise was rejected!</div>');
}

promise1.then(handleSuccess);
promise2.catch(handleError);
