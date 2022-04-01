'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(reject, 3000);
});

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);

function onSuccess() {
  body.insertAdjacentHTML('beforeend',
    `<div class="message">
      <h3>Promise was resolved!</h3>
    </div>`
  );
}

function onError() {
  body.insertAdjacentHTML('beforeend',
    `<div class="error-message">
      <h3>Promise was rejected!</h3>
    </div>`
  );
}
