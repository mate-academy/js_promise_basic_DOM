'use strict';

const logo = document.querySelector('.logo');

function createPromise() {
  const resolver = (success, error) => {
    logo.addEventListener('click', () => {
      success();
    });

    setTimeout(() => {
      error();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = createPromise();

promise1.then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = `Promise was resolved!`;

  document.body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.textContent = `Promise was rejected!`;

  document.body.append(div);
});
