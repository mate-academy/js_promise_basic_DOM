'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener('click', resolve, { once: true });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function showMessage(text, extraClass = '') {
  const div = document.createElement('div');

  div.className = `message ${extraClass}`.trim();

  div.textContent =
    text === 'Promise was resolved!'
      ? 'Promise was resolved!'
      : 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', 'error-message'));

promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', 'error-message'));
