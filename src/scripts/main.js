'use strict';

const logo = document.querySelector('.logo');

const promis1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promis1.then((result) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = result;
  document.body.append(div);
});

const promis2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was resolved!'));
  }, 3000);
});

promis2.catch((result) => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = result;
  document.body.append(div);
});
