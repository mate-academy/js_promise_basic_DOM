'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = 'Promise was rejected!';

    reject(err);
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

const errorHandler = (err) => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = err;
  document.body.appendChild(message);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
