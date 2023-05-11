'use strict';

function createPromise1() {
  const logo = document.querySelector('.logo');

  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const resolver = (resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise1();

promise1.then(() => {
  document.body.innerHTML += `
  <div class="message">
  Promise was resolved!
  </div>
  `;
});

const promise2 = createPromise2();

promise2.catch(() => {
  document.body.innerHTML += `
  <div class="message error-message">
  Promise was rejected!
  </div>
  `;
});
