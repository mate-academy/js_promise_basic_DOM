'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  resolve(
    logo.addEventListener('click', () => {
      createDiv('Promise was resolved!', 'message');
    }),
  );
});

promise1.then(() => {});

function createDiv(message, className) {
  const newDiv = document.createElement('div');

  newDiv.className = className;

  newDiv.textContent = message;

  body.appendChild(newDiv);
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(createDiv('Promise was rejected!', 'message error-message'));
  }, 3000);
});

promise2.catch(() => {});
