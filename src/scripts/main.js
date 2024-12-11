/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable promise/param-names */
/* eslint-disable no-unused-vars */
'use strict';

function showNotification(message, type) {
  const notification = document.createElement('div');

  notification.className = type;
  notification.setAttribute('data-qa', 'notification');
  notification.textContent = message;
  document.body.appendChild(notification);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((message) => {
    const successDiv = document.createElement('div');

    successDiv.className = 'message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error;
    document.body.appendChild(errorDiv);
  });

promise2
  .then((message) => {
    const successDiv = document.createElement('div');

    successDiv.className = 'message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error;
    document.body.appendChild(errorDiv);
  });

// eslint-disable-next-line no-shadow
document.addEventListener('contextmenu', (event) => event.preventDefault());
