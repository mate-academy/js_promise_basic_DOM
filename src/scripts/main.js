'use strict';

const body = document.body;
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (!logo) {
    return;
  }

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(successHandler, rejectHandler);

promise2.then(successHandler, rejectHandler);

function successHandler() {
  const block = document.createElement('div');

  block.classList.add('message');
  block.textContent = 'Promise was resolved!';

  body.appendChild(block);
}

function rejectHandler() {
  const block = document.createElement('div');

  block.classList.add('message', 'error-message');
  block.textContent = 'Promise was rejected!';

  body.appendChild(block);
}
