'use strict';

const logo = document.querySelector('.logo');

function showMessage(text) {
  const msgDiv = document.createElement('div');

  msgDiv.classList.add('message');
  msgDiv.textContent = String(text);
  document.body.appendChild(msgDiv);
}

function showError(text) {
  const msgDiv = document.createElement('div');

  msgDiv.classList.add('message', 'error-message');
  msgDiv.textContent = String(text);
  document.body.appendChild(msgDiv);
}

const promise1 = new Promise((resolve) => {
  if (!logo) {
    return;
  }

  logo.addEventListener('click', () => resolve('Promise was resolved!'), {
    once: true,
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(showMessage).catch(() => showError('Promise was rejected!'));
promise2.then(showMessage).catch(() => showError('Promise was rejected!'));
