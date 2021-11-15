'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', e => {
    resolve('Promise was resolved!');
  });
});

promise1.then(text => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class='message'>${text}</div>
  `);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(text => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class='message error-message'>${text}</div>
  `);
});
