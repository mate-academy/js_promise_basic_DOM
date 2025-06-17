'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Message appended after click');
    });
  }
});

promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 rejected after 3 seconds'));
  }, 3000);
});

promise2.then(() => {
  
})
.catch(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
});
