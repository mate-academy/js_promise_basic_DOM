'use strict';

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((message) => {
    appendMessage(message);
  })
  .catch((errorMessage) => {
    appendMessage(errorMessage, true);
  });

promise2
  .then((message) => {
    appendMessage(message);
  })
  .catch((errorMessage) => {
    appendMessage(errorMessage, true);
  });
