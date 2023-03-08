'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);

function success() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="message">
      Promise was resolved!
    </div>
  `
  );
};

function error() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="error-message">
      Promise was rejected!
    </div>
  `
  );
};
