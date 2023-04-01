'use strict';

function handleSuccess() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="message">Promise was resolved!</div>'
  );
}

function handleError() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="error-message">Promise was rejected!</div>'
  );
}

const clickPromise = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => resolve());
});

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Elapsed 3 seconds')), 1000);
});

clickPromise
  .then(handleSuccess, handleError);

timeoutPromise
  .then(handleSuccess, handleError);
