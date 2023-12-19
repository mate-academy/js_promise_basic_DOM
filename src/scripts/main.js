'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // error added for linter
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const success = () => {
  const message = `
    <div class="message">
      Promise was resolved!
    </div>
  `;

  body.insertAdjacentHTML('beforeend', message);
};

const error = () => {
  const message = `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `;

  body.insertAdjacentHTML('beforeend', message);
};

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);
