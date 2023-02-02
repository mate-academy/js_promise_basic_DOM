'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((resolve) => {
  div.textContent = resolve;
  div.className = 'message';

  document.body.append(div);
});

promise2.catch((reject) => {
  div.textContent = reject;
  div.className = 'error-message';

  document.body.append(div);
});
