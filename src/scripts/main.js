'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function showMessage(message, className = []) {
  const messageContainer = document.createElement('div');

  if (className.length > 0) {
    for (const cl of className) {
      messageContainer.classList.add(cl);
    }
  }

  messageContainer.textContent = message;
  document.body.appendChild(messageContainer);
}

promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', ['error-message']);
  });

promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', ['error-message']);
  });
