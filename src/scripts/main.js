'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

function promise1() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

promise1()
  .then(result => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message">${result}</div>
    `);
  });

function promise2() {
  const resolver = (resolve, reject) => {
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

promise2()
  .catch(result => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message error-message">${result}</div>
    `);
  });
