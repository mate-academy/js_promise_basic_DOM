'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const generateNotification = (className, message) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${message}</div>
  `);
};

promise1
  .then(data => generateNotification('message', data));

promise2
  .catch(error => generateNotification('message error-message', error));
