'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved';
  document.body.appendChild(div);
}

function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected';
  document.body.appendChild(div);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
