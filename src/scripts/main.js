'use strict';

function createResolvedDiv() {
  const resolvedDiv = document.createElement('div');

  resolvedDiv.className = 'message';
  resolvedDiv.innerText = 'Promise was resolved!';

  document.body.appendChild(resolvedDiv);
}

function createRejectedDiv(error) {
  const rejectedDiv = document.createElement('div');

  rejectedDiv.className = 'message error-message';
  rejectedDiv.innerText = error;

  document.body.appendChild(rejectedDiv);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    createResolvedDiv();
  })
  .catch((error) => {
    createRejectedDiv(error);
  });

promise2
  .then(() => {
    createResolvedDiv();
  })
  .catch((error) => {
    createRejectedDiv(error);
  });
