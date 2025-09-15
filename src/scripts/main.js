'use strict';

const body = document.body;

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((messageText) => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    messageDiv.textContent = messageText;

    if (body) {
      body.append(messageDiv);
    }
  })
  .catch(() => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message', 'error-message');
    messageDiv.textContent = 'Promise was rejected!';

    if (body) {
      body.append(messageDiv);
    }
  });

promise2
  .then((messageText) => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    messageDiv.textContent = 'Promise was resolved!';

    if (body) {
      body.append(messageDiv);
    }
  })
  .catch((error) => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message', 'error-message');
    messageDiv.textContent = error.message;

    if (body) {
      body.append(messageDiv);
    }
  });
