'use strict';

const logo = document.querySelector('.logo');

/** promise1 should be resolved on a click on .logo. */
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

/** promise2 promise should be rejected in 3 seconds. */
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

/** success handlers for both promises */
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

/** error handlers for both promises */
function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

/**  handlers for promise1 and promise2 */
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
