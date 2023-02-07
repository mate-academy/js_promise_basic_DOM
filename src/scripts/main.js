'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(value => {
  const div = document.createElement('div');

  div.innerText = value;
  div.className = 'message';

  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(value => {
  const div2 = document.createElement('div');

  div2.innerText = value;
  div2.className = ('message error-message');

  document.body.append(div2);
});
