'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

function handleSuccess(message) {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

function handleError(message) {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
