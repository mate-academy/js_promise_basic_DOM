'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createSuccessBlock() {
  body.insertAdjacentHTML('beforebegin', `
  <div class="message">
    Promise was resolved!
  </div>`);
}

function createErrorBlock() {
  body.insertAdjacentHTML('beforebegin', `
    <div class="message error-message">
      Promise was rejected!
    </div>`);
}

function createSuccessPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve(createSuccessBlock);
    });
  };

  return new Promise(resolver);
}

const promise1 = createSuccessPromise();

promise1.then(result => {
  result();
});

function createErrorPromise() {
  const resolver = (resolve, reject) => {
    reject(createErrorBlock);
  };

  return new Promise(resolver);
}

const promise2 = createErrorPromise();

promise2.catch(result => {
  setTimeout(result, 3000);
});
