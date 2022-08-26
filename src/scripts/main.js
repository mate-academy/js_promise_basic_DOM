'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  reject(Error);
});

promise1
  .then(success);

promise2
  .catch(error);

function success() {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      Promise was resolved!
    </div>
`);
}

function error() {
  setTimeout(() => {
    document.body.insertAdjacentHTML('afterbegin', `
    <div class="error-message message">
      Promise was rejected!
    </div>
`);
  }, 3000);
}
