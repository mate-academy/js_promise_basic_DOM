'use strict';

function createMessage(classname, message) {
  const messageDiv = document.createElement('div');

  messageDiv.textContent = message;
  messageDiv.className = classname;

  return messageDiv;
}

function onSuccess(result) {
  document.body.appendChild(
    createMessage('message', String(result))
  );
}

function onError(error) {
  document.body.appendChild(
    createMessage('error-message', error.message)
  );
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
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
