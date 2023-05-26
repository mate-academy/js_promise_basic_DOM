'use strict';

const showMessage = (type) => {
  const messageText = {
    success: 'Promise was resolved!',
    error: 'Promise was rejected!',
  };

  const message = document.createElement('div');

  message.classList.add('message');
  message.innerHTML = messageText[type];

  if (type === 'error') {
    message.classList.add('error-message');
  };

  document.body.append(message);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 3000);
});

promise1
  .then(success => showMessage(success))
  .catch(error => showMessage(error));

promise2
  .then(success => showMessage(success))
  .catch(error => showMessage(error));
