'use strict';

const bodyDoc = document.querySelector('body');
const mateLogo = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve, reject) => {
    mateLogo.addEventListener('click', () => resolve('Promise was resolved!'));
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });
};

promise1().then((val) => {
  const div1 = document.createElement('div');

  div1.setAttribute('class', 'message');
  bodyDoc.appendChild(div1);

  div1.textContent = val;
});

promise2().catch((val) => {
  const div2 = document.createElement('div');

  div2.setAttribute('class', 'message error-message');
  bodyDoc.appendChild(div2);

  div2.textContent = val;
});
