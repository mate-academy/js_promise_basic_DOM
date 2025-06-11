'use strict';

// write your code here
const logoElement = document.querySelector('.logo');
const bodyElement = document.body;

function displayMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;

  bodyElement.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => {
    resolve('Клік на логотип!');
  });
});

promise1
  .then((message) => {
    // console.log('Promise 1 виконано:', message);
    displayMessage('Promise was resolved!');
  })
  .catch((error) => {
    console.error('Promise 1 відхилено:', error);

    displayMessage('Promise was rejected!', true);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('3 секунди минуло!'));
  }, 3000);
});

promise2
  .then((message) => {
    // console.log('Promise 2 виконано:', message);
    displayMessage('Promise was resolved!');
  })
  .catch((error) => {
    console.error('Promise 2 відхилено:', error);
    displayMessage('Promise was rejected!', true);
  });
