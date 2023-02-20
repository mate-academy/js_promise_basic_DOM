'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error')), 3000);
});

const successHandler = () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

const errorHandler = () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      Promise was rejected!
    </div>
  `);
};

promise1.then(successHandler);
promise2.catch(errorHandler);
