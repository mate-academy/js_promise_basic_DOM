'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

function addSuccessMessage() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

function addErrorMessage() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
};

promise1
  .then(() => addSuccessMessage())
  .catch(() => {});

promise2
  .then(() => {})
  .catch(() => addErrorMessage());

// promise1.then(addSuccessMessage);
// promise2.catch(addErrorMessage);
