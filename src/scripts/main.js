'use strict';

const REJECT_DELAY = 3000;

function onSuccess() {
  const block = document.createElement('div');

  block.classList.add('message');
  block.textContent = 'Promise was resolved!';

  document.querySelector('body').append(block);
}

function onError() {
  const block = document.createElement('div');

  block.classList.add('message', 'error-message');
  block.textContent = 'Promise was rejected!';

  document.querySelector('body').append(block);
}

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, REJECT_DELAY);
});

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);
