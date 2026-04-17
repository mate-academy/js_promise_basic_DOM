'use strict';

const showMessage = (text, isError = false) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }

  messageDiv.textContent = text;
  document.body.append(messageDiv);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });

promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });
