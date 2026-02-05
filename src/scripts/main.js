'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showSuccess = () => {
  const message = document.createElement('div');

  message.classList = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
};

const showError = (error) => {
  const message = document.createElement('div');

  message.classList = 'message error-message';
  message.textContent = error.message || 'Promise was rejected!';
  document.body.append(message);
};

promise1.then(showSuccess).catch(showError);
promise2.then(showSuccess).catch(showError);
