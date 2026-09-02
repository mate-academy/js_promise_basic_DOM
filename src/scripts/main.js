'use strict';

const handleSucces = () => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  document.body.append(successDiv);
};

const handleError = () => {
  const failureDiv = document.createElement('div');

  failureDiv.className = 'message error-message';
  failureDiv.textContent = 'Promise was rejected!';
  document.body.append(failureDiv);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(handleSucces).catch(handleError);

promise2.then(handleSucces).catch(handleError);
