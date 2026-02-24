'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

promise1
  .then(() => {
    onResolve();
  })
  .catch(() => {
    onReject();
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    onResolve();
  })
  .catch(() => {
    onReject();
  });

function showMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }

  message.textContent = text;

  document.body.appendChild(message);

  return message;
}

function onResolve() {
  showMessage('Promise was resolved!');
}

function onReject() {
  showMessage('Promise was rejected!', true);
}
