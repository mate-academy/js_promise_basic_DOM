'use strict';

const logo = document.querySelector('.logo');

const promis1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promis1.then((res) => {
  message(res, 'message');
});

const promis2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promis2.catch((res) => {
  message(res, 'error-message');
});

function message(result, type) {
  const div = document.createElement('div');

  div.classList.add(type);
  div.innerText = result;
  document.body.append(div);
}
