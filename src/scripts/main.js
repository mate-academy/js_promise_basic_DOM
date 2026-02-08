'use strict';

const logo = document.querySelector('.logo');

function askForAdvice(message, isError) {
  const msg = document.createElement('div');

  msg.className = isError ? 'message error-message' : 'message';
  msg.textContent = message;
  document.body.appendChild(msg);
}

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve('Promise was resolved!');
      },
      { once: true },
    );
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((val) => askForAdvice(val, false))
  .catch((err) => askForAdvice(err.message, true));

promise2
  .then((val) => askForAdvice(val, false))
  .catch((err) => askForAdvice(err.message, true));
