'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = () => {
  return new Promise((resolve) => {
    resolve('Promise was resolved!');
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
};

const showSuccessMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  body.insertAdjacentElement('beforebegin', div);
};

const showErrorMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = `Error: ${message}`;
  body.insertAdjacentElement('beforebegin', div);
};

logo.addEventListener('click', () => {
  promise1()
    .then((message) => {
      showSuccessMessage(message);
    })
    .catch((error) => {
      showErrorMessage(error.message);
    });

  promise2()
    .then((message) => {
      showSuccessMessage(message);
    })
    .catch((error) => {
      showErrorMessage(error.message);
    });
});
