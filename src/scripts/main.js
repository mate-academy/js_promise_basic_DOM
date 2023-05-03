'use strict';

function successResult(clickedElement) {
  return new Promise((resolve) => {
    clickedElement.addEventListener('click', () => {
      resolve('message');
    });
  });
}

function resolvedMessage(type) {
  const message = document.createElement('div');

  message.className = `${type}`;

  message.textContent = type === 'message'
    ? `Promise was resolved!`
    : `Promise was rejected!`;

  document.body.append(message);
}

const logo = document.querySelector('.logo');

const promise1 = successResult(logo);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error-message'));
  }, 3000);
});

promise1
  .then(result => resolvedMessage(result))
  .catch(error => resolvedMessage(error));

promise2
  .then(result => resolvedMessage(result))
  .catch(error => resolvedMessage(error));
