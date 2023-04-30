'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    succes();
    resolve('Succes');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    error();
    reject(new Error('Promise was rejected'));
  }, 3000);
});

function error() {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
};

function succes() {
  document.body.insertAdjacentHTML('afterend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

promise1.then(() => {
  succes();
})
  .catch(() => {
    error();
  });

promise2.then(() => {
  succes();
})
  .catch(() => {
    error();
  });
