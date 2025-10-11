'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });

promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });
