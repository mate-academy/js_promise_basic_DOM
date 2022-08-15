'use strict';

const body = document.querySelector('.root');

const promise1 = new Promise((resolve) => {
  body.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.matches('.logo')) {
      resolve();
    };
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  createNotification('Promise was resolved!');
});

promise2.catch(() => {
  createNotification('Promise was rejected!', 'error-message');
});

function createNotification(text, type) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (type) {
    message.classList.add(type);
  }

  message.textContent = text;

  setTimeout(() => message.remove(), 3000);

  body.insertAdjacentElement('beforeend', message);
}
