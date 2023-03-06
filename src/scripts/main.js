'use strict';

const logoElement = document.querySelector('.logo');

function success() {
  const divElement = document.createElement('div');

  divElement.classList.add('message');
  divElement.textContent = 'Promise was resolved!';
  document.body.append(divElement);
}

function error() {
  const divElement = document.createElement('div');

  divElement.classList.add('error-message');
  divElement.textContent = 'Promise was rejected!';
  document.body.append(divElement);
}

const promise1 = new Promise(resolve => {
  logoElement.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(success);
promise2.catch(error);
