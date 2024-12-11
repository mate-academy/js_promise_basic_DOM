'use strict';

const promise1 = new Promise((resolve, reject) => {
  const icon = document.querySelector('.logo');

  icon.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout after 3 seconds'));
  }, 3000);
});

function promise1Resolve() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function promise2Reject() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1
  .then(() => {
    promise1Resolve();
  })
  .catch((error) => {
    error();
  });

promise2.catch(() => {
  promise2Reject();
});
