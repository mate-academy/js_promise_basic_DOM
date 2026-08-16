'use strict';

const logo = document.querySelector('.logo');

function addMessage(text, classes) {
  const div = document.createElement('div');

  div.classList.add(...classes);
  div.textContent = text;

  document.body.append(div);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => addMessage(message, ['message']))
  .catch((error) => addMessage(error.message, ['message', 'error-message']));

promise2
  .then((message) => addMessage(message, ['message']))
  .catch((error) => addMessage(error.message, ['message', 'error-message']));
