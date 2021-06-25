'use strict';

const promise = new Promise(function(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.onclick = () => resolve();
});

promise.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Error!')), 3000);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);

  setTimeout(() => message.remove(), 3000);
});
