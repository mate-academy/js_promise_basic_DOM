'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const resolveMessage = document.createElement('div');

    resolveMessage.className = 'message';
    resolveMessage.textContent = 'Promise was resolved!';

    document.body.append(resolveMessage);
  })
  .catch(() => {
    const rejectMessage = document.createElement('div');

    rejectMessage.className = 'message error-message';
    rejectMessage.textContent = 'Promise was rejected!';

    document.body.append(rejectMessage);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise2
  .then(() => {
    const resolveMessage = document.createElement('div');

    resolveMessage.className = 'message';
    resolveMessage.textContent = 'Promise was resolved!';

    document.body.append(resolveMessage);
  })
  .catch(() => {
    const rejectMessage = document.createElement('div');

    rejectMessage.className = 'message error-message';
    rejectMessage.textContent = 'Promise was rejected!';

    document.body.append(rejectMessage);
  });
