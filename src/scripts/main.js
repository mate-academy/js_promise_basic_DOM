'use strict';

const logo = document.querySelector('.logo');

if (logo) {
  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Clicked!');
    });
  });

  promise1
    .then(() => appendMessage('Promise was resolved!'))
    .catch(() => appendMessage('Promise was rejected!', true));
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Timeout error')), 3000);
});

promise2
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';

  div.textContent = text;
  document.body.append(div);
}
