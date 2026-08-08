'use strict';

// eslint-disable-next-line no-unused-vars
const promise1 = new Promise((resolve, reject) => {
  const myLogo = document.querySelector('.logo');

  myLogo.addEventListener('click', resolve);
}).then(() => {
  const resolveDiv = document.createElement('div');

  resolveDiv.className = 'message';
  resolveDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(resolveDiv);
});

// eslint-disable-next-line no-unused-vars
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
}).catch(() => {
  const rejectDiv = document.createElement('div');

  rejectDiv.className = 'message error-message';
  rejectDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(rejectDiv);
});
