'use strict';

// write your code here
const logo = document.querySelector('.logo');

function createMessage(message, isError) {
  const element = document.createElement('div');

  element.className = isError ? 'message error-message' : 'message';
  element.textContent = message;
  document.body.appendChild(element);
}

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve('Promise was resolved!');
      },
      { once: true },
    );
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((val) => createMessage(val, false))
  .catch((err) => createMessage(err.message, true));

promise2
  .then((val) => createMessage(val, false))
  .catch((err) => createMessage(err.message, true));
