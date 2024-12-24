'use strict';

function addMessage(messageText, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = messageText;

  if (isError) {
    message.classList.add('error-message');
  }

  document.body.append(message);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

promise1.then(() => addMessage('Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3_000);
});

promise2.catch(() => addMessage('Promise was rejected!', true));
