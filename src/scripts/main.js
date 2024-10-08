'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (ev) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = 'Time is over';

    reject(error);
  }, 3000);
});

function makeDiv(isThen) {
  const messageDiv = document.createElement('div');

  messageDiv.className = isThen ? 'message' : 'message error-message';

  messageDiv.textContent = isThen
    ? 'Promise was resolved!'
    : 'Promise was rejected!';
  document.body.appendChild(messageDiv);
}

promise1
  .then(() => {
    makeDiv(true);
  })
  .catch(() => {
    makeDiv(false);
  });

promise2
  .then(() => {
    makeDiv(true);
  })
  .catch(() => {
    makeDiv(false);
  });
