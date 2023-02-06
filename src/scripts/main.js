'use strict';

const logo = document.querySelector('.logo');

const showSuccessMessage = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
};

const showErrorMessage = () => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    showSuccessMessage();
  })
  .catch(() => {
    showErrorMessage();
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
  .then(() => {
    showSuccessMessage();
  })
  .catch(() => {
    showErrorMessage();
  });
