'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error()), 3000);
});

function success() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="message">
      Promise was resolved!
    </div>
  `
  );
};


function error() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="error-message message">
      Promise was rejected!
    </div>
  `
  );
};

promise1.then(success);
promise2.catch(error);
