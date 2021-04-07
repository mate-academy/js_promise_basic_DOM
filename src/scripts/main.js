'use strict';

const logo = document.querySelector('.logo');

function showMessage(className, innerText) {
  const message = document.createElement('div');

  message.className = className;
  message.innerText = innerText;

  document.body.append(message);
}

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

firstPromise
  .then(() => {
    showMessage('message', 'Promise was resolved!');
  });

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

secondPromise
  .catch(() => {
    showMessage('error-message', 'Promise was rejected!');
  });
