'use strict';

const REJECT_DELAY = 3000;

const logo = document.querySelector('.logo');

const showMessage = (text, isError) => {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }

  message.textContent = text;
  document.body.append(message);
};

const onResolve = () => showMessage('Promise was resolved!', false);
const onReject = () => showMessage('Promise was rejected!', true);

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve(), { once: true });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), REJECT_DELAY);
});

promise1.then(onResolve).catch(onReject);
promise2.then(onResolve).catch(onReject);
