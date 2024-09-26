'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  const promise2 = new Promise((resolve, reject) => {
    reject(new Error('Promise was rejected!'));
  });

  promise1
    .then(success)
    .catch(errors);

  promise2
    .then(success)
    .catch((error) => {
      setTimeout(() => {
        errors(error);
      }, 3000);
    });
});

function success(result) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${result}</div>`,
  );
}

function errors(err) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${err}</div>`,
  );
}
