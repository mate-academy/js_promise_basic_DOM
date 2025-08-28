'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve();
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

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch(() => {
    appendMessage('Promise was rejected!', true);
  });

promise1
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });

promise2
  .then(() => {
    appendMessage('Promise was resolved!');
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });
