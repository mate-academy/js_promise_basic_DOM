'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

function isResolved() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function isReject() {
  const thisIsBad = document.createElement('div');

  thisIsBad.className = 'message error-message';
  thisIsBad.innerText = 'Promise was rejected!';
  document.querySelector('body').append(thisIsBad);
}

promise1
  .then(() => {
    isResolved();
  })

  .catch(() => {
    isReject();
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    isResolved();
  })

  .catch(isReject);
