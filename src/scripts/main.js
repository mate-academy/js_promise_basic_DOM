'use strict';

function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve) => {
  const logoElement = document.querySelector('.logo');

  if (logoElement) {
    logoElement.addEventListener('click', () => {
      resolve();
    });
  }
});

promise1.then(handleSuccess).catch(handleError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected after 3 seconds'));
  }, 3000);
});

promise2.then(handleSuccess).catch(() => {
  handleError();
});
