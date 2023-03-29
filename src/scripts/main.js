'use strict';

const logoButton = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logoButton.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const div1 = document.createElement('div');

  div1.classList.add('message');
  div1.textContent = 'Promise was resolved!';
  document.body.appendChild(div1);
});

promise2.catch((message) => {
  const div2 = document.createElement('div');

  div2.classList.add('error-message');
  div2.classList.add('message');
  div2.textContent = message;
  document.body.appendChild(div2);
});
