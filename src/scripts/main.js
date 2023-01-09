'use strict';

const logo = document.querySelector('.logo');

const onSuccess = () => {
  logo.insertAdjacentHTML('afterend', `
    <div class="message">Promise was resolved!<div>
  `);
};

const onWarning = () => {
  logo.insertAdjacentHTML('afterend', `
    <div class="message error-message">Promise was rejected!<div>
  `);
};

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(
    onSuccess
  )
  .catch(
    onWarning
  );

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(onWarning);
  }, 3000);
});

promise2
  .catch(
    onWarning
  );
