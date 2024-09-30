'use strict';

let bodyDoc;
let mateLogo;

if (document.querySelector('body') !== null) {
  bodyDoc = document.querySelector('body');
}

if (document.querySelector('.logo') !== null) {
  mateLogo = document.querySelector('.logo');
}

const promise1 = () => {
  return new Promise((resolve, reject) => {
    mateLogo.addEventListener('click', () => resolve('Promise was resolved!'), {
      once: true,
    });
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    setTimeout(() => reject('Promise was rejected!'), 3000);
  });
};

function makeDiv(className) {
  const div = document.createElement('div');

  div.setAttribute('class', className);
  bodyDoc.appendChild(div);

  return div;
}

promise1().then((val) => {
  const successHandler = makeDiv('message');

  successHandler.textContent = val;
});

promise2().catch((val) => {
  const errorHandler = makeDiv('message error-message');

  errorHandler.textContent = val;
});
