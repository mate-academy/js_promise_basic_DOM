'use strict';

function printMessage(messageText, messageClass) {
  const message = document.createElement('div');

  message.classList.add(messageClass);
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

promise1
  .then()
  .catch(setTimeout(() => {
    printMessage('Promise was rejected!', 'error-message');
  }, 3000));
