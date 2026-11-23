'use strict';

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

function ElementResolve(message, error = false) {
  const newMessage = document.createElement('div');

  newMessage.classList.add('message');

  if (error) {
    newMessage.classList.add('error-message');
  }

  newMessage.textContent = message;

  document.body.append(newMessage);
}

promise1
  .then((succesdata) => ElementResolve(succesdata))
  .catch((errorData) => ElementResolve(errorData, true));

promise2
  .then((succesdata) => ElementResolve(succesdata))
  .catch((errorData) => ElementResolve(errorData, true));
