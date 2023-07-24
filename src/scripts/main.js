'use strict';

const logo = document.getElementById('logo');

const printMessage = (text, isError = false) => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = text;
  document.body.append(div);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => printMessage('Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
  .catch(() => printMessage('Promise was rejected!', true));
