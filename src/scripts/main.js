'use strict';

const promise1 = new Promise((resolve) => {
  const logoEl = document.querySelector('.logo');

  logoEl.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('You are out of time!'));
  }, 3000);
});

function handleSuccess() {
  const messageEl = document.createElement('div');

  messageEl.className = 'message';
  messageEl.textContent = 'Promise was resolved!';
  document.body.appendChild(messageEl);
}

function handleError() {
  const messageEl = document.createElement('div');

  messageEl.className = 'message error-message';
  messageEl.textContent = 'Promise was rejected!';
  document.body.appendChild(messageEl);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
