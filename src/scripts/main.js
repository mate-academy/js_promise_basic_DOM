'use strict';

const logo = document.querySelector('.logo');

function showNotification(message, cls) {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add(cls);
  div.textContent = message;
  body.append(div);
};

const promise1 = Promise.resolve(() => {});
const promise2 = Promise.reject(new Error());

promise2.catch(() => setTimeout(() =>
  showNotification('Promise was rejected!', 'error-message'), 3000));

logo.addEventListener('click', () => {
  promise1.then(() => showNotification('Promise was resolved!', 'message'));
});
