'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

function getNewPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

function success() {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

function error() {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message message">
      Promise was rejected!
    </div>
  `);
};

const promise1 = getNewPromise();

promise1.then(success, error);

const promise2 = getNewPromise();

promise2.then(success, error);
