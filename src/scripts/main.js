'use strict';

function resolved() {
  const resolvedDiv = document.createElement('div');

  resolvedDiv.classList.add('message');

  resolvedDiv.innerText = 'Promise was resolved!';

  document.body.append(resolvedDiv);
}

function rejected() {
  const rejectedDiv = document.createElement('div');

  rejectedDiv.classList.add('message', 'error-message');

  rejectedDiv.innerText = 'Promise was rejected!';

  document.body.append(rejectedDiv);
}

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(resolved).catch(rejected);
promise2.then(resolved).catch(rejected);
