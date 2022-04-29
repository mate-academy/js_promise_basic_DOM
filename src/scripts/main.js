'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function promise1() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
};

promise1()
  .then(result => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = result;
    body.append(div);
  });

function promise2() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      reject('Promise was rejected!');
    });
  };

  return new Promise(resolver);
};

promise2()
  .catch(result => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = result;
    setTimeout(() => body.append(div), 3000);
  });
