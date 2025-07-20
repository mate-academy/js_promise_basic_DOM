'use strict';

const logoElement = document.querySelector('.logo');
const bodyElement = document.body;

function appendMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  bodyElement.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage('Promise was rejected!' + error, true);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage('Promise was rejected!' + error, true);
  });
