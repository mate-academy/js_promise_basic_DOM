'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Advice was not entered within 3 seconds'));
  }, 3000);
});

promise1.then(() => {
  const resolvedDiv = document.createElement('div');

  resolvedDiv.className = 'message';
  resolvedDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(resolvedDiv);
});

promise2.catch(() => {
  const rejectedDiv = document.createElement('div');

  rejectedDiv.className = 'message error-message';
  rejectedDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(rejectedDiv);
});
