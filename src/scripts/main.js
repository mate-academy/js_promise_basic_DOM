'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  const resMessage = document.createElement('div');

  resMessage.textContent = 'Promise was resolved!';
  resMessage.classList.add('message');

  logo.addEventListener('click', () => {
    resolve(resMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  const rejMessage = document.createElement('div');

  rejMessage.textContent = 'Promise was rejected!';
  rejMessage.classList.add('message', 'error-message');

  setTimeout(() => {
    reject(rejMessage);
  }, 3000);
});

promise1.then((messageElement) => {
  document.body.appendChild(messageElement);
});

promise2.catch((messageElement) => {
  document.body.appendChild(messageElement);
});
