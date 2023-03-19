'use strict';

const logo = document.querySelector('.logo');

const callBackResolve = () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

const callBackReject = () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message message">
      Promise was rejected!
    </div>
  `);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(callBackResolve);

promise2
  .catch(callBackReject);
