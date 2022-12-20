'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

const showMessage = (type, text) => {
  const seccessMessage = document.createElement('div');

  seccessMessage.className = type;
  seccessMessage.textContent = text;
  body.append(seccessMessage);
};

promise1.then(() => {
  showMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  showMessage('error-message', 'Promise was rejected!');
});
