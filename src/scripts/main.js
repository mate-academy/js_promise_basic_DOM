'use strict';

const logo = document.querySelector('.logo');

function addMessage(className, text) {
  const message = document.createElement('div');

  message.classList.add(className);
  message.textContent = text;
  document.body.append(message);
}

const promiseOne = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promiseOne
  .then(() => {
    addMessage('message', 'Promise was resolved!');
  });

promiseTwo
  .catch(() => {
    addMessage('error-message', 'Promise was rejected!');
  });
