'use strict';

function createMessage(text, errorMessage) {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add(errorMessage);
  message.innerText = text;
  document.body.appendChild(message);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

const success = () => {
  createMessage('Promise was resolved!');
};

const error = () => {
  createMessage('Promise was rejected!', 'error-message');
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);
