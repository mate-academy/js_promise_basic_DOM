'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((resolvedText) => {
  const div1 = document.createElement('div');

  div1.setAttribute('class', 'message');
  div1.textContent = resolvedText;

  document.body.append(div1);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const div2 = document.createElement('div');

  div2.setAttribute('class', 'message error-message');
  div2.textContent = error;

  document.body.append(div2);
});
