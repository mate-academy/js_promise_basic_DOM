'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error());
  }, 3000);
});

const showNotification = (className, text) => {
  const message = document.createElement('div');

  message.classList.add(className);
  message.textContent = text;

  document.body.append(message);
};

const successHandler = () => {
  showNotification('message', 'Promise was resolved!');
};

const errorHandler = () => {
  showNotification('error-message', 'Promise was rejected!');
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
