'use strict';

const logo = document.querySelector('.logo');
const successContainer = document.createElement('div');
const errorContainer = document.createElement('div');

successContainer.classList.add('message');
successContainer.textContent = 'Promise was resolved!';

errorContainer.classList.add('error-message');
errorContainer.classList.add('message');
errorContainer.textContent = 'Promise was rejected!';

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve(document.body.append(successContainer));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(document.body.append(errorContainer));
  }, 3000);
}
);

promise1.then();
promise2.then();
