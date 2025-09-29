'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function funcSuccess(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

function funcError(error) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message;
  document.body.appendChild(div);
}

promise1.then(funcSuccess).catch(funcError);
promise2.then(funcSuccess).catch(funcError);
