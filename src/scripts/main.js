'use strict';
/* eslint-disable */

const logo = document.querySelector('.logo');

function promise1() {
  logo.addEventListener('click', () =>
    new Promise((resolve) => resolve('Promise was resolved!')).then(
      (msg) => (document.body.innerHTML += `<div class="message">${msg}</div>`),
    ),
  );
}

function promise2() {
  new Promise((resolve, reject) =>
    setTimeout(reject, 3000, 'Promise was rejected!'),
  ).catch(
    (msg) =>
      (document.body.innerHTML += `<div class="message error-message">${msg}</div>`),
  );
}

promise1();
promise2();
