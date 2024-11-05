'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', () => resolve());
});

promise1
  .then((mes) => {
    const messageSuccess = document.createElement('div');

    messageSuccess.classList.add('message');
    messageSuccess.textContent = 'Promise was resolved!';
    document.body.appendChild(messageSuccess);
  })
  .catch((mes) => {
    const messageError = document.createElement('div');

    messageError.classList.add('message');
    messageError.classList.add('error-message');
    messageError.textContent = 'Promise was rejected!';
    document.body.appendChild(messageError);
  });

const promise2 = new Promise(function (resolve, reject) {
  // eslint-disable-next-line
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise2.catch((mes) => {
  const mesError = document.createElement('div');

  mesError.classList.add('message');
  mesError.classList.add('error-message');
  mesError.textContent = mes;
  document.body.appendChild(mesError);
});
