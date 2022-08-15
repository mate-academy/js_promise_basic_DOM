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
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  setTimeout(() => message.remove(), 3000);

  body.insertAdjacentElement('beforeend', message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';

  setTimeout(() => message.remove(), 3000);

  body.insertAdjacentElement('beforeend', message);
});
