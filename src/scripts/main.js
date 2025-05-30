'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1

  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });

promise2
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });

function appendMessage(message, isError = false) {
  const messageElement = document.createElement('div');

  messageElement.textContent = message;

  if (isError) {
    messageElement.classList.add('error');
  } else {
    messageElement.classList.add('success');
  }
  document.body.appendChild(messageElement);
}
