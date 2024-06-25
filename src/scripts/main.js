'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(new Error('PROMISE FAILED'));
    }, 3000);
  });
});

promise1.then(() => {
  const newDiv = document.createElement('h1');

  newDiv.className = 'message';

  newDiv.innerHTML = 'Promise was resolved!';

  document.body.appendChild(newDiv);
});

promise2.catch(() => {
  const newDiv = document.createElement('h1');

  newDiv.className = 'message';
  newDiv.classList.add('error-message');

  newDiv.innerHTML = 'Promise was rejected!';

  document.body.appendChild(newDiv);
});
