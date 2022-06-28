'use strict';

const promise1 = new Promise(resolve => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const successHandler = () => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>
  `);
};

const errorHandler = () => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="error-message">
    Promise was rejected!
  </div>
  `);
};

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
