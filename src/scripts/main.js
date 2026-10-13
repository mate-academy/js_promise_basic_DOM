'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected')), 3000);
});

function createMessage(type) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (type === 'error') {
    message.classList.add('error-message');
    message.textContent = 'Promise was rejected!';
  } else {
    message.textContent = 'Promise was resolved!';
  }

  return message;
}

promise1
  .then(() => {
    document.body.appendChild(createMessage('success'));
  })
  .catch(() => {
    document.body.appendChild(createMessage('error'));
  });

promise2
  .then(() => {
    document.body.appendChild(createMessage('success'));
  })
  .catch(() => {
    document.body.appendChild(createMessage('error'));
  });
