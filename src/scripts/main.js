'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  creatingMessage('Promise was resolved!');
});

promise2
  .then(() => {
    creatingMessage('Promise was resolved!');
  })
  .catch((error) => {
    creatingMessage(error.message, 'error-message');
  });

function creatingMessage(message, addition) {
  const createdElement = document.createElement('div');

  createdElement.classList.add('message', addition);
  createdElement.textContent = message;
  document.body.append(createdElement);
}
