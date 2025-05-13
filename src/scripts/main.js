'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (!logo) {
    reject(new Error('Logo element not found'));

    return;
  }

  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

promise1
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));

promise2
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));
