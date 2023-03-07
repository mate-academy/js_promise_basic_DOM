'use strict';

const logoElement = document.querySelector('.logo');

function action(classList, textContext) {
  const divElement = document.createElement('div');

  divElement.classList.add(classList);
  divElement.textContent = textContext;
  document.body.append(divElement);
}

function success() {
  action('message', 'Promise was resolved!');
}

function error() {
  action('error-message', 'Promise was rejected!');
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
