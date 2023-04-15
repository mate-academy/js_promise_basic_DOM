'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function createMessage(message, className) {
  const div = document.createElement('div');

  div.classList.add(className);
  div.innerText = message;

  document.body.append(div);
}

promise1
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  });

promise2
  .catch(() => {
    createMessage('Promise was rejected!', 'error-message');
  });
