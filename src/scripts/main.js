'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(Error);
    }, 3000);
  });
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = 'Promise was resolved!';

    document.body.append(div);
  });

promise2
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.innerText = 'Promise was rejected!';

    document.body.append(div);
  });
