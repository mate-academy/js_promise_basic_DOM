'use strict';

const logoButton = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logoButton.addEventListener('click', () => {
    const div1 = document.createElement('div');

    div1.classList.add('message');
    div1.textContent = 'Promise was resolved!';
    document.body.appendChild(div1);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div2 = document.createElement('div');

    div2.classList.add('error-message');
    div2.classList.add('message');
    div2.textContent = 'Promise was rejected!';
    document.body.appendChild(div2);
  }, 3000);
});

promise1.then();
promise2.then();
