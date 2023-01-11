'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const succses = document.createElement('div');
const error = document.createElement('div');

succses.innerHTML = 'Promise was resolved!';
error.innerHTML = 'Promise was rejected!';
succses.classList.add('message');
error.classList.add('error-message');
body.append(succses);
body.append(error);
error.style.display = 'none';
succses.style.display = 'none';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(succses.style.display = 'block');
  });
});

const promise2 = promise1.then(reject => {
  setTimeout(() => {
    reject(error.style.display = 'block');
  }, 3000);
});

promise2();
promise1();
