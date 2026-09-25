'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const divSuccess = document.createElement('div');

  divSuccess.classList.add('message');

  divSuccess.textContent = 'Promise was resolved!';

  document.body.append(divSuccess);
});

promise1.catch(() => {
  const divError = document.createElement('div');

  divError.classList.add('message');
  divError.classList.add('error-message');

  divError.textContent = 'Promise was rejected!';

  document.body.append(divError);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2.then(() => {
  const divSuccess = document.createElement('div');

  divSuccess.classList.add('message');

  divSuccess.textContent = 'Promise was resolved!';

  document.body.append(divSuccess);
});

promise2.catch((error) => {
  const divError = document.createElement('div');

  divError.classList.add('message');
  divError.classList.add('error-message');

  divError.textContent = error.message;

  document.body.append(divError);
});
