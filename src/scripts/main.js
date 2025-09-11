'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('logo is not found'));

    return;
  }

  logo.addEventListener('click', () => {
    resolve('Logo was clicked');
  });
});

const PROMISE2_REJECTION_TIME = 3000;
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      new Error(`promise2 rejected after ${PROMISE2_REJECTION_TIME} seconds`),
    );
  }, PROMISE2_REJECTION_TIME);
});

const handleSuccess = () => {
  const div = document.createElement('div');

  if (!div) {
    throw new Error('div is not found');
  }

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const handleError = () => {
  const div = document.createElement('div');

  if (!div) {
    throw new Error('div is not found');
  }

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
