'use strict';

/**
 * @param {string} text
 * @param {boolean} isError
 */
function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;

  if (isError) {
    div.classList.add('error-message');
  }

  document.body.appendChild(div);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (!logo) {
    return reject(new Error('Logo element not found.'));
  }

  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

promise1
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage('Promise was rejected!', !!error);
  });

const REJECTION_TIME_MS = 3000;

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout of 3 seconds reached.'));
  }, REJECTION_TIME_MS);
});

promise2
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage('Promise was rejected!', !!error);
  });
