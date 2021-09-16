'use strict';

function printMessage(messageText, messageClass = '') {
  const message = document.createElement('div');

  message.classList.add('message', messageClass);
  message.innerText = messageText;

  document.body.append(message);
}

const promise1 = new Promise((resolve) => {
  const logoButton = document.querySelector('.logo');

  logoButton.addEventListener('click', () => {
    printMessage('Promise was resolved!', 'message');
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  reject(setTimeout(() => {
    printMessage('Promise was rejected!', 'error-message');
  }, 3000));
});

promise1
  .then(() => promise2)
  .catch(() => {});
