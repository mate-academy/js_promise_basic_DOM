'use strict';

const logo = document.querySelector('.logo');

function printMessage(className, text) {
  const message = document.createElement('div');

  message.className = className;
  message.innerText = text;

  document.body.append(message);
}

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

firstPromise
  .then(() => {
    printMessage('message', 'Promise was resolved!');
  });

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error occured'));
  }, 3000);
});

secondPromise
  .catch(() => {
    printMessage('error-message', 'Promise was rejected!');
  });
