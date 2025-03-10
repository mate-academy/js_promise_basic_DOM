/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logoElem = document.querySelector('.logo');
const bodyElem = document.body;

const promise1 = new Promise((resolve, reject) => {
  logoElem.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((success) => {
  bodyElem.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${success}</div>`,
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise2.catch((errorMassage) => {
  bodyElem.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${errorMassage} </div>`,
  );
});
