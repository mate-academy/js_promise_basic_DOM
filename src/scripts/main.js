'use strict';

const logo = document.querySelector('.logo');
const success = `
  <div class="message">
    Promise was resolved!
  </div>
`;
const error = `
  <div class="message error-message">
    Promise was rejected!
  </div>
`;
const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('fck')), '3000');
});

promise1
  .then(result => document.body.insertAdjacentHTML('beforeend', success));

promise2
  .catch(cancel => document.body.insertAdjacentHTML('beforeend', error));
