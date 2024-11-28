'use strict';

const promise1 = new Promise(function (resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const handleSuccess = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const handleError = () => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(handleSuccess).catch(handleError);
promise2.catch(handleError);
