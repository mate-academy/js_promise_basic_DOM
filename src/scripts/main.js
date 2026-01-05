'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve();
      },
      { once: true },
    );
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
  }, 3000);
});

const hanldeSuccess = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const handleError = () => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(hanldeSuccess).catch(handleError);
promise2.then(hanldeSuccess).catch(handleError);
