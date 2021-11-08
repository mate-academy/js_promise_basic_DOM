'use strict';

const logo = document.querySelector('.logo');

const successDiv = document.createElement('div');

successDiv.classList.add('message');
successDiv.textContent = 'Promise was resolved!';

const rejectDiv = document.createElement('div');

rejectDiv.classList.add('error-message');
rejectDiv.textContent = 'Promise was rejected!';

const successHandler = () => {
  document.body.append(successDiv);
};

const errorHandler = () => {
  document.body.append(rejectDiv);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(successHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .catch(errorHandler);
