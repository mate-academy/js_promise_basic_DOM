'use strict';

function createMessage(text, isError) {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.textContent = text;

  if (isError) {
    newDiv.classList.add('error-message');
  }

  document.body.appendChild(newDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    if (!logo) {
      return;
    }

    const handler = () => {
      resolve();
      logo.removeEventListener('click', handler);
    };

    logo.addEventListener('click', handler);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'));
    }, 3000);
  });

  promise1
    .then(() => createMessage('Promise was resolved!'))
    .catch(() => createMessage('Promise was rejected!', true));

  promise2
    .then(() => createMessage('Promise was resolved!'))
    .catch(() => createMessage('Promise was rejected!', true));
});
