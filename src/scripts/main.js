'use strict';

// write your code here
const logoButton = document.getElementById('logo');

const promise1 = new Promise((resolve) => {
  logoButton.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function onSuccess() {
  const appendDiv = document.createElement('div');

  appendDiv.className = 'message';
  appendDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(appendDiv);
}

function onFailure() {
  const appendDiv = document.createElement('div');

  appendDiv.classList.add('message', 'error-message');
  appendDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(appendDiv);
}

promise1
  .then(onSuccess);

promise2
  .catch(onFailure);
