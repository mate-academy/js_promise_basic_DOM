'use strict';

// write your code here
const createNotification = (type) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message ${type === 'resolve' ? '' : 'error-message'}">
  ${type === 'resolve' ? 'Promise was resolved!' : 'Promise was rejected!'}
  </div>
  `);
};

const logo = document.querySelector('.logo');

const promise = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('resolve');
  });
});

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    setTimeout(() => reject(Error), 3000);
  });
});

promise.then(
  (result) => {
    createNotification(result);

    return promise1;
  }).then(
  (result) => {},
  (error) => createNotification(error)
);
