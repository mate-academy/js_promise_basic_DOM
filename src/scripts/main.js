'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.body.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(message => {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="message">${message}</div>
    `);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

promise2
  .catch(message => {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="message error-message">${message}</div>
    `);
  });
