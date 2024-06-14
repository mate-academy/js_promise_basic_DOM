'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleHelper = (message) => {
  const messageDiv = document.createElement('div');

  if (message === 'success') {
    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
  } else {
    messageDiv.className = 'message error-message';
    messageDiv.textContent = message.message;
  }

  document.body.appendChild(messageDiv);
};

promise1.then(handleHelper).catch(handleHelper);

promise2.then(handleHelper).catch(handleHelper);
