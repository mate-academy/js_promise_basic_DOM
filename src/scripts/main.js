'use strict';

const logo = document.querySelector('.logo');

if (logo) {
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  promise1.then(() => {
    handler('Promise was resolved!', 'message');
  });
} else {
  handler('Promise was rejected!', 'message error-message');
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout error'));
  }, 3000);
});

promise2
  .then(() => {
    handler('Promise was resolved!', 'message');
  })
  .catch(() => {
    handler('Promise was rejected!', 'message error-message');
  });

function handler(text, classes) {
  const div = document.createElement('div');

  div.className = classes;
  div.textContent = text;
  document.body.append(div);
}
