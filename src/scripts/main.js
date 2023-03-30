'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() =>
    reject(error), 3000);
});

const successe = () => {
  body.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>
`);
};

const error = () => {
  body.insertAdjacentHTML('beforeend', `
  <div class="error-message">
    Promise was rejected!
  </div>
`);
};

promise1.then(successe);
promise2.catch(error);
