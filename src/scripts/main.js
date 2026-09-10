'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

promise1
  .then((message) => {
    appendMessage(message);
  })
  .catch(() => {
    appendMessage('Promisi was rejected!', true);
  });

promise2
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });
