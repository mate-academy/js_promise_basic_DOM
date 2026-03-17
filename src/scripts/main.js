'use strict';

function createMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('Logo not found'));

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

promise1.then(() => createMessage('Promise was resolved!'));

promise1.catch(() => createMessage('Promise was rejected!', true));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise2 was rejected')), 3000);
});

promise2.then(() => createMessage('Promise was resolved!'));

promise2.catch(() => createMessage('Promise was rejected!', true));
