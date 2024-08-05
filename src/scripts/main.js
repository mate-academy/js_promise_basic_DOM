'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const showMessage = (title, type) => {
  const message = document.createElement('div');

  message.classList.add('message');

  if (type === 'error') {
    message.classList.add('error-message');
  }

  message.textContent = title;
  body.append(message);
};

const promise1 = new Promise((resolve) => {
  const clickHandler = () => {
    resolve('Promise was resolved!');
    logo.removeEventListener('click', clickHandler);
  };

  logo.addEventListener('click', clickHandler);
});

promise1.then((message) => {
  showMessage(message, 'success');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((err) => {
  showMessage(err.message, 'error');
});
