'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

const successHandler = (message) => {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = `Promise was resolved!`;
  document.body.append(notification);
};

const errorHandler = (message) => {
  const error = document.createElement('div');

  error.classList = 'message error-message';
  error.textContent = 'Promise was rejected!';

  document.body.appendChild(error);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
