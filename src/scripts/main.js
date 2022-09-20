'use strict';

const promise1 = new Promise((resolve, reject) => {
  resolve(document.querySelector('.logo').addEventListener('click', resolve));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const handleSuccess = () => {
  document.body.append(`
  <div class="message">
    Promise was resolved!
  </div>
`);
};

const handleError = () => {
  document.body.append(`
  <div class="error-message">
    Promise was rejected!
  </div>
`);
};

promise1.then(handleSuccess, handleError);
promise2.then(handleSuccess, handleError);
