'use strict';

function printMessage(messageText, messageClass = '') {
  const message = document.createElement('div');

  message.classList.add('message', messageClass);
  message.innerText = messageText;

  document.body.append(message);
}

// eslint-disable-next-line no-unused-vars
const promise1 = new Promise((resolve) => resolve());

const promise2 = new Promise((resolve, reject) => {
  reject(new Error());
});

promise1.then(() => {
  const logoButton = document.querySelector('.logo');

  logoButton.addEventListener('click', () => {
    printMessage('Promise was resolved!', 'message');
  });
});

promise2.catch(() => {
  setTimeout(() => {
    printMessage('Promise was rejected!', 'error-message');
  }, 3000);
});
