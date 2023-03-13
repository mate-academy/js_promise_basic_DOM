'use strict';

const icon = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  icon.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  notification('message', 'Promise was resolved!');
});

promise2.catch(() => {
  notification('error-message', 'Promise was rejected!');
});

function notification(type, text) {
  const span = document.createElement('div');

  span.className = type;
  span.textContent = text;
  document.body.appendChild(span);
};
