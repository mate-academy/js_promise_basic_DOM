'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler(result) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${result}
    </div>
  `);
};

function errorHandler(reject) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      ${reject}
    </div>
  `);
};

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
