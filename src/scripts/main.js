'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const message = document.createElement('div');
const messageError = document.createElement('div');

message.setAttribute('class', 'message');
message.textContent = 'Promise was resolved!';

messageError.classList.add('message', 'error-message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    clearTimeout(timeout);
    resolve();
  });

  const timeout = setTimeout(() => {
    reject();
  }, 3000);
});

promise1
  .then(() => {
    body.append(message);
  })
  .catch(() => {
    body.append(messageError);
    messageError.textContent = 'Promise was rejected!';
  });
