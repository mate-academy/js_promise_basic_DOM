'use strict';

const appendMessage = (className, message) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="${className}">${message}</div>
  `);
};

const resolvedPromise = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

resolvedPromise.then(() => {
  appendMessage('message', 'Promise was resolved!');
});

rejectedPromise.catch(() => {
  appendMessage('message error-message', 'Promise was rejected!');
});
