'use strict';

function createMessage(className, text) {
  const message = document.createElement('div');

  message.classList.add(className);
  message.textContent = text;

  return message;
};

function onSuccess() {
  const successMessage = createMessage('message', 'Promise was resolved');

  document.body.append(successMessage);
}

function onError() {
  const errorMessage = createMessage('error-message', 'Promise was rejected!');

  document.body.append(errorMessage);
}

const promise1 = new Promise((resolve, reject) => {
  const logoRef = document.querySelector('.logo');

  logoRef.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);
