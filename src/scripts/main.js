'use strict';

const body = document.querySelector('body');
const div = document.createElement('div');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(12);
  });
});

promise1
  .then(() => {
    body.append(div);
    div.classList = 'message';
    div.textContent = 'Promise was resolved!';
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise2
  .catch(() => {
    body.append(div);
    div.classList = 'error-message';
    div.textContent = 'Promise was rejected!';
  });

// logo.addEventListener('click', (e) => {
//     console.log(e.tagret);
//  console.log('11');
//         });
