'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('Element .logo not found'));

    return;
  }

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timed out after 3 seconds'));
  }, 3000);
});

function showSuccessMessage() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function showErrorMessage() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(showSuccessMessage).catch(showErrorMessage);

promise2.then(showSuccessMessage).catch(showErrorMessage);
