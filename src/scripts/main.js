'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// eslint-disable-next-line promise/param-names
const promise2 = new Promise((reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

function addMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1.then((message) => {
  addMessage(message);
});

promise2.catch((errorMessage) => {
  addMessage(errorMessage, true);
});
