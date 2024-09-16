'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function appendMessage(text, hasError = false) {
  const divMessage = document.createElement('div');

  divMessage.classList.add('message');

  if (hasError) {
    divMessage.classList.add('error-message');
  }

  divMessage.textContent = text;

  document.body.append(divMessage);
}

promise1.then((message) => {
  appendMessage(message);
});

promise2.catch((errorMessage) => {
  appendMessage(errorMessage, true);
});
