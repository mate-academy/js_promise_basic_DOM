'use strict';

const logo = document.querySelector('.logo');

function createMessage(messageClass, messageText) {
  return `<div class="${messageClass}">${messageText}</div>`;
};

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const message = createMessage('message', 'Promise was resolved!');

    resolve(message);
  });
});

firstPromise.then((message) => {
  logo.insertAdjacentHTML('afterend', message);
});

const secondPromise = new Promise((resolve, reject) => {
  const errorMessage = createMessage(
    'message error-message', 'Promise was rejected!');

  setTimeout(() => reject(errorMessage), 3000);
});

secondPromise.catch((errorMessage) => {
  logo.insertAdjacentHTML('afterend', errorMessage);
});
