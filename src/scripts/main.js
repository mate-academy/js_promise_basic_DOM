'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createPromise() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  });
}

const promise1 = createPromise();
const promise2 = createPromise();

promise1.then(ok);
promise2.catch(cancel);

function ok() {
  body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      Promise was resolved!
    </div>`);
}

function cancel() {
  body.insertAdjacentHTML('afterbegin', `
      <div class="error-message">
        Promise was rejected!
      </div>`);
}
