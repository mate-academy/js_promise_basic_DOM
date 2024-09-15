'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(addError);
  }, 3000);
});

function addSuccess() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
}

function addError() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
}

promise1
  .then(addSuccess)
  .catch(addError);

promise2
  .then(addSuccess)
  .catch(addError);
