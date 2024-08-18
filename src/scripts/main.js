'use strict';

const promises1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promises2 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
});

promises1.then(() => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  document.body.append(success);
});

promises2.catch((error) => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = error.message;
  document.body.append(errorMessage);
});
