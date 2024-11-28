'use strict';

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

function appendMessage(message, isError = false) {
  const div = document.createElement('div');

  div.className = 'message';

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = message;
  document.body.appendChild(div);
}

promise1
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error, true);
  });

promise2
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error, true);
  });
