'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected after 3 seconds'));
  }, 3000);
});

promise1
  .then(() => {
    const messageHTML = '<div class="message">Promise was resolved!</div>';

    document.body.insertAdjacentHTML('beforeend', messageHTML);
  });

promise2
  .catch(() => {
    const errorMessageHTML = '<div class="error-message">'
      + 'Promise was rejected!</div>';

    document.body.insertAdjacentHTML('beforeend', errorMessageHTML);
  });
