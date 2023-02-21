'use strict';
// debugger

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function success() {
  function positveResult(resolve) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }

  return new Promise(positveResult);
}

function fail() {
  const failed = (resolved, error) => {
    error('Promise was rejected!');
  };

  return new Promise(failed);
}

const promise1 = success();
const promise2 = fail();

promise1.then(result => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${result}
      </div>
  `);
});

setTimeout(() => {
  promise2.catch(err => {
    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">
        ${err}
      </div>
    `);
  });
}, 3000);
