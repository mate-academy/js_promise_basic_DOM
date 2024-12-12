'use strict';

const logo = document.getElementById('logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const onSuccess = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

const onError = () => {
  const error = document.createElement('div');

  error.className = 'message error-message';
  error.textContent = 'Promise was rejected!';
  document.body.appendChild(error);
};

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
