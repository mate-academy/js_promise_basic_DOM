'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return reject(new Error('Element with class ".logo" not found.'));
  }

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    () => reject(new Error('Promise timed out after 3 seconds')),
    3000,
  );
});

const displayMessage = (message, type = '') => {
  const div = document.createElement('div');

  div.classList.add('message', type);
  div.textContent = message;
  document.body.appendChild(div);
};

promise1
  .then(() => {
    displayMessage('Promise was resolved!');
  })
  .catch((error) => {
    displayMessage(`Promise was rejected: ${error.message}`, 'error-message');
  });

promise2
  .then(() => {
    displayMessage('Promise was resolved!');
  })
  .catch((error) => {
    displayMessage(`Promise was rejected: ${error.message}`, 'error-message');
  });
