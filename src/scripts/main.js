'use strict';

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message';

  if (isError) {
    div.classList.add('error-message');
    div.textContent = text;
  }
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected after 3 seconds'));
  }, 3000);
});

promise1
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));

promise2
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));
