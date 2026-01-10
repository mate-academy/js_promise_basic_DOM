'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logoEl = document.querySelector('.logo');

  if (!logoEl) {
    reject(new Error('Element .logo not found'));

    return;
  }

  logoEl.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected after 3 seconds'));
  }, 3000);
});

function handleSuccess() {
  const msg = document.createElement('div');

  msg.className = 'message';
  msg.textContent = 'Promise was resolved!';
  document.body.append(msg);
}

function handleError() {
  const msg = document.createElement('div');

  msg.className = 'message error-message';
  msg.textContent = 'Promise was rejected!';
  document.body.append(msg);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
