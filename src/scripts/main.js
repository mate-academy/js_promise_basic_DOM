'use strict';

const body = document.querySelector('body');
const logoBtn = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logoBtn.addEventListener('click', resolve, { once: true });
});

promise1.then(createSuccessMessage).catch(createErrorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(createSuccessMessage).catch(createErrorMessage);

function createSuccessMessage() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
}

function createErrorMessage() {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
}
