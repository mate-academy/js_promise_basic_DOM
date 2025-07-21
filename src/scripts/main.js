'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  }
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';

    document.body.append(messageDiv);
  })
  .catch(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message error-message';
    messageDiv.textContent = 'Promise was rejected!';

    document.body.append(messageDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after 3 seconds'));
  }, 3000);
});

promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';

    document.body.append(messageDiv);
  })
  .catch(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message error-message';
    messageDiv.textContent = 'Promise was rejected!';

    document.body.append(messageDiv);
  });
