'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function addMessage(addText, addClass) {
  const message = document.createElement('div');

  message.classList.add(addClass);
  message.textContent = addText;
  body.append(message);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    addMessage('Promise was resolved!', 'message');
  });

promise2
  .catch(() => {
    addMessage('Promise was rejected!', 'error-message');
  });
