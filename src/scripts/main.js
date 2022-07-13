'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});
const successHandler = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};
const errorHandler = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      Promise was rejected!
    </div>
  `);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
