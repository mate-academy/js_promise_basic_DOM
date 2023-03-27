'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error()), 3000);
});

function onSuccess() {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>
  `);
};

function onError() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      Promise was rejected!
    </div>
    `);
};

promise1.then(onSuccess);
promise2.catch(onError);
