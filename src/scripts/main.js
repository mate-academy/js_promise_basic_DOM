'use strict';

const logoEl = document.querySelector('.logo');
let resolveLogo;
const promise1 = new Promise((resolve) => {
  resolveLogo = resolve;
});

logoEl.addEventListener('click', () => {
  resolveLogo();
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('timeout')), 3000);
});

function addMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message ' + (isError ? 'error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));

promise2
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));
