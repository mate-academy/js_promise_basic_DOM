'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1.then(result => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = result;
  logo.parentNode.appendChild(message);
});

promise2.catch(error => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = error.message;
  logo.parentNode.appendChild(message);
});
