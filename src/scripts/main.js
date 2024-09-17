'use strict';

const logo = document.querySelector('.logo');

function complete(result) {
  const div = document.createElement('div');

  div.textContent = 'Promise was resolved!';
  div.className = 'message';
  document.body.appendChild(div);
}

function error(data) {
  const div = document.createElement('div');

  div.textContent = 'Promise was rejected!';
  div.className = 'error-message';
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise1
  .then(complete);

promise2
  .catch(error);
