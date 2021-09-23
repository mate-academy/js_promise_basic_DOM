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
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    /* eslint-disable-next-line */
    reject('Promise was rejected!');
  }, 3000);
});

promise1.then((messageText) => {
  printMessage(messageText, 'message');
});

promise2.catch((messageText) => {
  printMessage(messageText, 'error-message');
});
