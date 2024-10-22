'use strict';

const logoEl = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  const messageEl = document.createElement('div');

  messageEl.classList.add('message');
  messageEl.textContent = 'Promise was resolved!';
  logoEl.onclick = () => resolve(messageEl);
});

promise1.then((messageEl) => document.body.append(messageEl));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorEl = document.createElement('div');

    errorEl.classList.add('message', 'error-message');
    errorEl.textContent = 'Promise was rejected!';
    reject(errorEl);
  }, 3000);
});

promise2.then((messageEl) => document.body.append(messageEl));

promise2.catch((errorEl) => document.body.append(errorEl));
