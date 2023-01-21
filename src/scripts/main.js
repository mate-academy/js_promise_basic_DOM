'use strict';

const logo = document.querySelector('.logo');

function onSuccess() {
  document.body.insertAdjacentHTML('beforeend', `<div class='message'>
    Promise was resolved!
  </div>`);
}

function onError() {
  document.body.insertAdjacentHTML('beforeend',
    `<div class='message error-message'>
      Promise was rejected!
    </div>`
  );
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(
  value => onSuccess(),
  error => onError(error)
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise2.then(
  value => onSuccess,
  error => onError(error)
);
