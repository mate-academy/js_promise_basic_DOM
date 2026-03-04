'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise timed out after 3 seconds'));
  }, 3000);
});

promise1
  .then(() => {
    const messages = document.createElement('div');

    messages.className = 'message';
    messages.textContent = 'Promise was resolved!';
    document.body.append(messages);
  })
  .catch(() => {
    const messages = document.createElement('div');

    messages.className = 'message error-message';
    messages.textContent = 'Promise was rejected!';
    document.body.append(messages);
  });

promise2
  .then(() => {
    const messages = document.createElement('div');

    messages.className = 'message';
    messages.textContent = 'Promise was resolved!';
    document.body.append(messages);
  })
  .catch(() => {
    const messages = document.createElement('div');

    messages.className = 'message error-message';
    messages.textContent = 'Promise was rejected!';
    document.body.append(messages);
  });
