'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => (
  logo.addEventListener('click', resolve)
));

const promise2 = new Promise((resolve, reject) => (
  setTimeout(() => reject(new Error('Promise was rejected')), 3000)
));

promise1
  .then(() => showSuccessMessage())
  .catch(() => showErrorMessage());

promise2
  .then(() => showSuccessMessage())
  .catch(() => showErrorMessage());

const showSuccessMessage = () => {
  document.body.insertAdjacentHTML(`afterbegin`,
    `
      <div class="message">
        Promise was resolved!
      </div>
    `
  );
};

const showErrorMessage = () => {
  document.body.insertAdjacentHTML(`afterbegin`,
    `
      <div class="error-message message">
        Promise was rejected!
      </div>
    `
  );
};
