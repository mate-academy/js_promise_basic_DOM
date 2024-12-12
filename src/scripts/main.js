'use strict';

function handleSuccess() {
  const resolveDiv = document.createElement('div');

  resolveDiv.className = 'message';
  resolveDiv.textContent = 'Promise was resolved!';
}

function handleError() {
  const rejectDiv = document.createElement('div');

  rejectDiv.className = 'message error-message';
  rejectDiv.textContent = 'Promise was rejected!';
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 rejected after 3 seconds'));
  }, 3000);
});

promise1
  .then(() => {
    handleSuccess();
  })
  .catch(() => {
    handleError();
  });

promise2
  .then(() => {
    handleSuccess();
  })
  .catch(() => {
    handleError();
  });
