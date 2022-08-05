'use strict';

const logo = document.querySelector('.logo');

const successHandler = () => {
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="message">
    Promise was resolved!
  </div>
  `);
};

const errorHandler = () => {
  setTimeout(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="error-message">
        Promise was rejected!
      </div>
    `);
  }, 3000);
};

const promise1 = Promise.resolve(successHandler);
const promise2 = Promise.reject(errorHandler);

promise1
  .then(onSuccess => {
    logo.addEventListener('click', () => onSuccess());
  });

promise2
  .catch(onError => onError());
