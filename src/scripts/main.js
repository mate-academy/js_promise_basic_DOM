'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function addSuccessMessage(successText) {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve(successText);
    });
  });
};

const promise1 = addSuccessMessage('Promise was resolved!');

promise1
  .then((text) => {
    body.innerHTML = `<div class="message">${text}</div>`;
  })

  .catch(() => {
    body.innerHTML = '<div class="error-message">Promise was rejected!</div>';
  });

const promise2 = new Promise((resolve, reject) => {
  reject(new Error());
});

promise2
  .then(() => {
    body.innerHTML = '<div class="message">Promise was resolved!</div>';
  })

  .catch(() => {
    setTimeout(() => {
      body.innerHTML = `<div class="error-message">Promise was rejected!</div>`;
    }, 3000);
  });
