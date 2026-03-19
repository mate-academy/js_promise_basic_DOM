'use strict';

function createAndAppendMessage(messageText, isError = false) {
  const message = document.createElement('DIV');

  message.classList.add('message');
  message.innerText = messageText;

  if (isError) {
    message.classList.add('error-message');
  }

  document.body.append(message);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

promise1.then(() => {
  createAndAppendMessage('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  createAndAppendMessage('Promise was rejected!', true);
});
