'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

function appendMessage(message, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.appendChild(div);
}

promise1.then(() => {
  appendMessage('Promise was resolved!');
});

promise2.then(() => {
  appendMessage('Promise was resolved!');
});

promise1.catch(() => {
  appendMessage('Promise was rejected!', true);
});

promise2.catch(() => {
  appendMessage('Promise was rejected!', true);
});
