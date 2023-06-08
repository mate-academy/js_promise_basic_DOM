'use strict';

const resolve = () => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.append(message);
  });
};

const reject = () => {
  setTimeout(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';
    document.body.append(message);
  }, 3000);
};

const promise1 = new Promise(resolve);
const promise2 = new Promise(reject);

promise1.then();
promise2.catch();
