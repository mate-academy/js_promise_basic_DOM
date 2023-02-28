'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1.then(() => {
  const massage = document.createElement('div');

  massage.className = 'message';
  massage.innerText = 'Promise was resolved!';
  document.body.append(massage);
});

promise2.catch(() => {
  const errorMassage = document.createElement('div');

  errorMassage.className = 'error-message';
  errorMassage.innerText = 'Promise was rejected!';
  document.body.append(errorMassage);
});
