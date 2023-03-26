'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const createMessage = (classForDiv, text) => {
  const message = document.createElement('div');

  message.classList.add(classForDiv);

  message.textContent = text;

  document.body.append(message);
};

promise1.then(() => {
  createMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  createMessage('error-message', 'Promise was rejected!');
});
