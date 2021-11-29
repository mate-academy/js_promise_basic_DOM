'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = Promise.resolve();
const promise2 = Promise.reject(Error);

promise1
  .then(
    logo.addEventListener('click', () => {
      addNotification('Promise was resolved!', 'message');
    })
  );

promise2
  .catch(
    setTimeout(() => {
      addNotification('Promise was rejected!', 'message error-message');
    }, 3000)
  );

function addNotification(message, className) {
  const div = document.createElement('div');

  div.textContent = message;
  div.className = className;

  body.append(div);
}
