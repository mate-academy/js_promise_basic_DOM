'use strict';

const logo = document.querySelector('.logo');
const body = document.body;
const message = document.createElement('div');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  notification('message', 'resolved');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  notification('error-message', 'rejected');
});

function notification(classList, state) {
  message.classList.add(classList);
  message.textContent = `Promise was ${state}!`;
  body.appendChild(message);
}
